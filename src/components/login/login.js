import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import FirebaseAuth from './firebase-auth';
import './login.css';

/*@inject('UIStore', 'SessionStore')*/ @inject('RootStore')
@observer
class Login extends Component {
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
  }

  render() {
    //console.log(this.props.RootStore.SessionStore.userAuth);
    if (!this.props.RootStore.SessionStore.userAuth) {
      return (
        <div className="login">
          <h1> Sign In or Sign Up! </h1>
          <h3>Please choose one of the options below</h3>
          <hr />
          <FirebaseAuth {...this.props} />
        </div>
      );
    } else if (this.props.RootStore.SessionStore.userAuth) {
      return (
        <div className="login">
          <h1>Welcome {this.props.RootStore.SessionStore.userAuth.displayName}!</h1>
          <h3> You are now signed in. </h3>
        </div>
      );
    }
  }
}
export default Login;
