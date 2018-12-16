import Amplify from 'aws-amplify';
import React, { Fragment, useState } from 'react';
import aws_exports from './aws-exports.js';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(aws_exports);

const App = () => {
  const [count, setCount] = useState(120);

  return (
    <Fragment>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </Fragment>
  );
};

export default withAuthenticator(App, true);
