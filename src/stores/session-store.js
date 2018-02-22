import { observable, action, computed, useStrict } from 'mobx';
import fire from './../services/fire';
import Data from './data.json';

useStrict(true);

const db = fire.database().ref();

class MobxSessionStore {
  @observable userAuth = {};
  @observable userObj = {};
  @observable signedIn = null;
  @observable currentQId = '';

  /*@computed
  get allQs() {
    return this.userObj.allQs;
  }*/
  @action('handleSignedIn')
  handleSignedIn = (signedIn, userAuth) => {
    console.log(signedIn);
    console.log(userAuth);
    this.signedIn = signedIn;
    this.userAuth = userAuth;
    if (signedIn) this.checkUserExists();
  };

  checkUserExists() {
    db
      .child(`users/${this.userAuth.uid}`)
      .once('value', snapshot => {
        this.userExists = snapshot.val() !== null;
      })
      .then(() => {
        if (this.userExists) {
          this.updateSignInTime();
        } else {
          this.createNewUser();
        }
      });
  }

  updateSignInTime() {
    db
      .child(`users/${this.userAuth.uid}`)
      .update({
        lastSignIn: this.userAuth.metadata.lastSignInTime
      })
      .then(this.setUserObj());
  }

  createNewUser() {
    db
      .child(`users/${this.userAuth.uid}`)
      .set({
        uid: this.userAuth.uid,
        name: this.userAuth.displayName,
        email: this.userAuth.email,
        emailVerified: this.userAuth.emailVerified,
        created: this.userAuth.metadata.creationTime,
        lastSignIn: this.userAuth.metadata.lastSignInTime,
        phoneNo: this.userAuth.phoneNumber,
        photoURL: this.userAuth.photoURL,
        lastQIds: ['cFullName'],
        allQs: Data
      })
      .then(this.setUserObj());
  }

  @action('setUserObj')
  setUserObj = () => {
    db.child(`users/${this.userAuth.uid}`).once('value', snapshot => {
      this.userObj = snapshot.val();
      this.currentQId = this.userObj.lastQIds.pop();
    });
  };

  @action('handleBack')
  handleBack = () => {
    if (this.userObj.lastQIds.length === 0) return;
    this.currentQId = this.userObj.lastQIds.length === 0 ? 'cFullName' : this.userObj.lastQIds.pop();
    this.updateLastQs();
  };

  @action('handleNext')
  handleNext = (givenAnswer, nxtQId) => {
    this.userObj.lastQIds.push(this.currentQId);
    this.userObj.allQs[this.currentQId].answered = givenAnswer;
    this.userObj.allQs[this.currentQId].answeredOn = Date.now();
    db.child(`users/${this.userObj.uid}/allQs`).update({
      [this.currentQId]: this.userObj.allQs[this.currentQId]
    });
    this.updateLastQs();
    this.setCurrentQ(nxtQId);
  };

  @computed
  get letterTemplate() {
    if (this.userObj.allQs.injuredBy2.answered === 'injuredByRoadDefect') return 'roadDefectLetter';
    if (this.userObj.allQs.injuredBy.answered === 'injuredByAnimal') return 'injuredByAnimalLetter';
    if (this.userObj.allQs.injuredBy.answered === 'injuredByPed') return 'injuredByPedestrianLetter';
    if (this.userObj.allQs.iDets1.answered === 'iDets1Rear') return 'rearEndedByLetter';
    if (this.userObj.allQs.vTurned1.answered === 'vTurned1RChangingLanes') return 'vTurned1RChangingLanesLetter';
    if (this.userObj.allQs.vTurned1.answered === 'vTurned1LChangingLanes') return 'vTurned1LChangingLanesLetter';
    if (this.userObj.allQs.iDets1.answered === 'vTurned1RTurning') return 'vDirDetsSameQTurnIntoYouRLetter';
    if (this.userObj.allQs.iDets1.answered === 'vTurned1LTurning') return 'vDirDetsSameQTurnIntoYouLLetter';
    if (this.userObj.allQs.vTurned2.answered === 'vTurned2Overtaking') return 'oncomingOvertakingLetter';
    if (this.userObj.allQs.vTurned2.answered === 'vTurned2Turning') return 'oncomingAcrossPathLetter';
    if (this.userObj.allQs.vTurned2.answered === 'vTurned2Parking') return 'vTurned2ParkingLetter';
    if (this.userObj.allQs.vTurned2.answered === 'vTurned2SideRoad') return 'vTurned2SideRoadLetter';
    if (this.userObj.allQs.roundabout.answered === 'roundaboutDirL') return 'roundaboutLLetter';
    if (this.userObj.allQs.iDets1.answered === 'iDets1HitAsPassed') return 'iDets1HitAsPassedLetter';
  }

  @action('setCurrentQ')
  setCurrentQ = nxtQId => {
    this.currentQId = nxtQId === 'letter' ? this.letterTemplate : nxtQId;
  };

  updateLastQs = () => {
    db.child(`users/${this.userObj.uid}`).update({
      lastQIds: this.userObj.lastQIds
    });
  };
}
const sessionStore = new MobxSessionStore();
export default sessionStore;
