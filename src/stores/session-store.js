import { observable, action, useStrict } from 'mobx';
import fire from './../services/fire';

useStrict(true);

const db = fire.database().ref();

class MobxSessionStore {
  @observable user = {};
  @observable signedIn = null;

  @action('handleSignedIn')
  handleSignedIn = signedIn => {
    this.signedIn = signedIn;
  };

  @action('setUser')
  setUser(user) {
    //gets user infomation from signin and creates a new user if one does not exist
    //otherwise it just updates the lastSignedIn value
    db
      .child(`users/${user.uid}`)
      .once('value', snapshot => {
        this.userExists = snapshot.val() === null;
      })
      .then(() => {
        if (this.userExists) {
          const c1QData = {};
          for (let i = 1; i < 26; i++) {
            let key = i < 10 ? `q00${i}` : `q0${i}`;
            c1QData[key] = {
              score: 0,
              lastSeen: '',
              lastAnsd: '',
              timesAnsd: 0,
              timesRight: 0
            };
          }
          const c2QData = [];
          for (let i = 1; i < 26; i++) {
            c2QData.push({
              qId: i < 10 ? `q00${i}` : `q0${i}`,
              score: 0,
              lastSeen: '',
              arrayKey: c2QData.length,
              lastAnsd: '',
              timesAnsd: 0,
              timesRight: 0
            });
          }
          db
            .child(`users/${user.uid}`)
            .set({
              user: {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                emailVerified: user.emailVerified,
                created: user.metadata.creationTime,
                lastSignIn: user.metadata.lastSignInTime,
                phoneNo: user.phoneNumber,
                photoURL: user.photoURL
              },
              courses: {
                c1: {
                  qs: c1QData
                },
                c2: {
                  qs: c2QData
                }
              }
            })
            .then(
              db
                .child(`users/${user.uid}`)
                .once('value')
                .then(
                  action(snapshot => {
                    this.user = snapshot.val();
                  })
                )
            );
        } else {
          db
            .child(`users/${user.uid}/user`)
            .update({
              lastSignIn: user.metadata.lastSignInTime
            })
            .then(
              db
                .child(`users/${user.uid}`)
                .once('value')
                .then(
                  action(snapshot => {
                    this.user = snapshot.val();
                  })
                )
            );
        }
      });
  }
}
const sessionStore = new MobxSessionStore();
export default sessionStore;
