import React, { Component } from 'react';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import { observer, inject } from 'mobx-react';
import 'firebaseui/dist/firebaseui.css';

@inject('UIStore', 'SessionStore')
@observer
class FirebaseAuth extends Component {
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
      //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //firebase.auth.GithubAuthProvider.PROVIDER_ID,
      //firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
    callbacks: {
      signInSuccess: user => {
        //this.props.SessionStore.createUser(user);
        setTimeout(() => {
          this.props.history.push('/');
        }, 2000);
        //return false;
      }
    }
  };

  componentDidMount() {
    this.firebaseUiWidget = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
    this.firebaseUiWidget.reset();
    this.firebaseUiWidget.start('#firebaseui_container', this.uiConfig);
  }

  componentWillUnmount() {
    this.firebaseUiWidget.reset();
  }

  render() {
    return <div className="form" id="firebaseui_container" />;
  }
}

export default FirebaseAuth;
