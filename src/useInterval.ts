import { useEffect, useRef, useState, useCallback } from 'react';

export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<() => void>();
  const intervalId = useRef<number | undefined>();
  const [currentDelay, setDelay] = useState<number | null>(delay);

  const toggleRunning = useCallback(
    () => setDelay(prevDelay => (!prevDelay ? delay : null)),
    [delay]
  );

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current && savedCallback.current();
    };

    const clear = () => window.clearInterval(intervalId.current);

    if (intervalId.current) {
      clear();
    }

    if (currentDelay) {
      intervalId.current = window.setInterval(tick, currentDelay);
    }

    return clear;
  }, [currentDelay]);

  return {
    intervalId: intervalId.current,
    toggleRunning,
    isRunning: !!currentDelay,
  };
};
