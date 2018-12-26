import React from 'react';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import aws_exports from './aws-exports.js';

Amplify.configure(aws_exports);

export const AuthWrapper = ({ children }) => {
  return children;
};

export default withAuthenticator(AuthWrapper, true);
