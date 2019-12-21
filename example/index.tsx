import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { useInterval } from '../.';

const App = () => {
  const { toggleRunning, isRunning } = useInterval(() => {
    console.log('Interval is running!');
  }, 1000);

  return (
    <Fragment>
      <button onClick={toggleRunning}>{isRunning ? 'Pause' : 'Resume'}</button>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
