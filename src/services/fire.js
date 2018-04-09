import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyBPsxzdxkXP6nN4FUUnXNP99aMkk_UCKvw',
  authDomain: 'my-legal-helper.firebaseapp.com',
  databaseURL: 'https://my-legal-helper.firebaseio.com',
  projectId: 'my-legal-helper',
  storageBucket: '',
  messagingSenderId: '410909635046'
};

var fire = firebase.initializeApp(config);

export default fire;
