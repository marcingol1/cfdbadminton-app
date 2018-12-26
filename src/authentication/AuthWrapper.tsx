import React, { Component } from 'react';
import { Authenticator, Greetings } from 'aws-amplify-react';
import aws_exports from './aws-exports.js';

/* class AuthWrapper extends Component {
  _validAuthState: string[];

  constructor(props) {
    super(props);
    this._validAuthState = ['signedIn'];
  }
  showComponent = theme => {
    console.log(this, theme);
    const { children } = this.props;
    return <Authenticator>{children}</Authenticator>;
  };
} */

const TopBarComponent = props => {
  return <div>hello world! </div>;
};

class AuthWrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <Authenticator hide={[Greetings]} amplifyConfig={aws_exports}>
        <TopBarComponent override={Greetings} />
        {children}
      </Authenticator>
    );
  }
}

export default AuthWrapper;
