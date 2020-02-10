import { renderHook, act } from '@testing-library/react-hooks';

import { useInterval } from '../src/useInterval';

beforeAll(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

test('testing', async () => {
  const mockCallback = jest.fn();

  const { result } = renderHook(() => useInterval(mockCallback, 100));

  expect(result.current.isRunning).toBeTruthy();
  expect(setInterval).toBeCalledTimes(1);
});

test('Verify callback is called over interval of time periods', () => {
  const mockCallback = jest.fn();

  renderHook(() => useInterval(mockCallback, 200));
  expect(mockCallback).not.toHaveBeenCalled();

  jest.advanceTimersByTime(199);
  expect(mockCallback).not.toHaveBeenCalled();

  jest.advanceTimersByTime(1);
  expect(mockCallback).toHaveBeenCalledTimes(1);

  jest.advanceTimersToNextTimer();
  expect(mockCallback).toHaveBeenCalledTimes(2);

  jest.advanceTimersToNextTimer(3);
  expect(mockCallback).toHaveBeenCalledTimes(5);
});

test('Should toggle interval', () => {
  const mockCallback = jest.fn();

  const { result } = renderHook(() => useInterval(mockCallback, 200));

  act(() => {
    result.current.toggleRunning();
  });

  expect(result.current.isRunning).toBeFalsy();

  act(() => {
    result.current.toggleRunning();
  });

  expect(result.current.isRunning).toBeTruthy();
});

test('Interval should clear on unmount', () => {
  const mockCallback = jest.fn();

  const { unmount } = renderHook(() => useInterval(mockCallback, 200));

  unmount();

  expect(clearInterval).toBeCalled();
});
