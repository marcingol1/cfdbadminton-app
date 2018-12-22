import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import aws_exports from './../aws-exports.js';

Amplify.configure(aws_exports);

Amplify.configure({
  API: {
    graphql_endpoint:
      'https://nfgxtncwivenfdw3m66rfxleay.appsync-api.eu-central-1.amazonaws.com/graphql',
  },
});

export const AuthWrapper = ({ children }) => {
  return children;
};

export default withAuthenticator(AuthWrapper, true);
