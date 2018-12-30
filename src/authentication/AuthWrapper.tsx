import React, { Component, Fragment } from 'react';
import { Authenticator, Greetings } from 'aws-amplify-react';
import aws_exports from './aws-exports.js';

const ChildrenWrapper = props => {
  if (props.authState !== 'signedIn') {
    return null;
  }
  return props.children;
};

const ContextProvider = React.createContext('false');

const Dummy = props => {
  return <Fragment />;
};
class AuthWrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <Authenticator hide={[Greetings]} amplifyConfig={aws_exports}>
        <Dummy override={Greetings} />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </Authenticator>
    );
  }
}

export default AuthWrapper;
