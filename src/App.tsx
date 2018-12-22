import React, { Fragment, useState } from 'react';
import TestList from './server-list/test-list';

const App = () => {
  const [count, setCount] = useState(120);

  return (
    <Fragment>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <TestList />
    </Fragment>
  );
};

export default App;
