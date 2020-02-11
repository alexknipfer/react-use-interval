[![Blazing Fast](https://badgen.net/npm/v/@ascendum/use-interval)](https://npm.im/@ascendum/use-interval)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

# react-use-interval

This is an customized version of the react hook for setting an interval as posted on overreacted.io.

## Install

```bash
npm install --save use-interval
```

## Usage

```tsx
import as React from 'react'

import { useInterval } from 'react-use-interval'

const MyComponent = () => {
  const {
    toggleRunning,
    isRunning
  } = useInterval(() => {
    // Do whatever magic you wish here.
  }, 1000);

  return (
    <div>
      <button onClick={toggleRunning}>
        {isRunning ? 'Paused' : 'Resume'}
      </button>
    </div>
  );
}
```

## License

MIT
