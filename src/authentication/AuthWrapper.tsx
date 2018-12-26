import React, { Component } from 'react';
import { Authenticator, Greetings } from 'aws-amplify-react';
import { Auth } from 'aws-amplify';
import aws_exports from './aws-exports.js';
import { Button } from '@material-ui/core';

const initiateLogout = () => {
  Auth.signOut()
    .then(data => {
      window.location.reload();
    })
    .catch(err => console.log(err));
};

const TopBarComponent = props => {
  if (props.authState !== 'signedIn') {
    return null;
  }
  return <Button onClick={initiateLogout}>Log out!</Button>;
};

const ChildrenWrapper = props => {
  if (props.authState !== 'signedIn') {
    return null;
  }
  return props.children;
};

class AuthWrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <Authenticator hide={[Greetings]} amplifyConfig={aws_exports}>
        <TopBarComponent override={Greetings} />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </Authenticator>
    );
  }
}

export default AuthWrapper;
