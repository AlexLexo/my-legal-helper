import { observable, action, computed, useStrict } from 'mobx';

import fire from './../services/fire';
import Data from './data.json';
import Inj from './valuerData.json';

useStrict(true);

const db = fire.database().ref();

export default class mobxSessionStore {
  constructor(rootStore) {
    this.RootStore = rootStore;
  }
  @observable userAuth = {};
  @observable userObj = {};
  @observable signedIn = null;
  @observable currentQId = '';

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
        lastQIds: {
          caseTool: ['start'],
          valuer: ['start']
        },
        allQs: Data,
        injuries: [
          {
            injuryType: 'none',
            injuryLocation: 'none',
            injuryDuration: 'none',
            injuryStart: 'none',
            injuryEnd: 'none'
          }
        ],
        editedLetter: {
          cFullName: '',
          cAddress: '',
          iDate: '',
          dFullName: '',
          dPolicyNumber: '',
          intro: '',
          circumstancesofIncident1: '',
          circumstancesofIncident2: '',
          letterId: '',
          createdOn: ''
        },
        messages: [
          {
            messageTitle: 'Welcome',
            messageBody: 'Welcome to My Legal Helper',
            date: Date.now()
          }
        ]
      })
      .then(this.setUserObj());
  }

  @action('setUserObj')
  setUserObj = () => {
    db.child(`users/${this.userAuth.uid}`).once('value', snapshot => {
      this.userObj = snapshot.val();
      this.setInitialQ();
    });
  };

  @action('setInitialQ')
  setInitialQ = () => {
    if (this.RootStore.UIStore.currentSection !== 'caseTool' && this.RootStore.UIStore.currentSection !== 'valuer')
      return;
    this.currentQId =
      this.userObj.lastQIds[this.RootStore.UIStore.currentSection].length === 1
        ? this.RootStore.UIStore.currentSection === 'caseTool' ? 'cFullName' : 'val0'
        : this.userObj.lastQIds[this.RootStore.UIStore.currentSection].pop();
  };

  @action('handleBack')
  handleBack = () => {
    if (this.userObj.lastQIds[this.RootStore.UIStore.currentSection].length === 1) return;
    this.userObj.allQs[this.currentQId].answered = '';
    db.child(`users/${this.userObj.uid}/allQs/${this.currentQId}`).update({
      answered: ''
    });
    this.currentQId = this.userObj.lastQIds[this.RootStore.UIStore.currentSection].pop();
    this.updateLastQs();
  };

  @action('handleNext')
  handleNext = (givenAnswer, nxtQId) => {
    this.userObj.lastQIds[this.RootStore.UIStore.currentSection].push(this.currentQId);
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
    if (this.userObj.allQs.vTurned1.answered === 'vTurned1RTurning') return 'vDirDetsSameQTurnIntoYouRLetter';
    if (this.userObj.allQs.vTurned1.answered === 'vTurned1LTurning') return 'vDirDetsSameQTurnIntoYouLLetter';
    if (this.userObj.allQs.vTurned2.answered === 'vTurned2Overtaking') return 'oncomingOvertakingLetter';
    if (this.userObj.allQs.vTurned2.answered === 'vTurned2Turning') return 'oncomingAcrossPathLetter';
    if (this.userObj.allQs.vTurned2.answered === 'vTurned2Parking') return 'vTurned2ParkingLetter';
    if (this.userObj.allQs.vTurned2.answered === 'vTurned2SideRoad') return 'vTurned2SideRoadLetter';
    if (this.userObj.allQs.roundabout.answered === 'roundaboutDirL') return 'roundaboutLLetter';
    if (this.userObj.allQs.iDets1.answered === 'iDets1HitAsPassed') return 'iDets1HitAsPassedLetter';
    //if (this.userObj.allQs.dooredDets.answered === 'dooredDetsPassenger') return 'dooredPassengerLetter';
    if (this.userObj.allQs.dooredDets.answered === 'dooredDetsDriver') return 'dooredDriverLetter';
  }

  @action('setEditedLetter')
  setEditedLetter = (edits, letterId) => {
    this.userObj.editedLetter = {
      cFullName: edits.cFullName,
      cAddress: edits.cAddress,
      iDate: edits.iDate,
      dFullName: edits.dFullName,
      dPolicyNumber: edits.dPolicyNumber,
      intro: edits.intro,
      circumstancesofIncident1: edits.circumstancesofIncident1,
      circumstancesofIncident2: edits.circumstancesofIncident2,
      letterId: letterId,
      createdOn: Date.now()
    };
    db.child(`users/${this.userObj.uid}/editedLetter`).update(this.userObj.editedLetter);
    //console.log(this.userObj.editedLetter);
  };

  @action('setInjuryLocation')
  setInjuryLocation = x => {
    console.log(x);
    this.injuryLocation = x;
  };

  @action('setInjuryDuration')
  setInjuryDuration = (start, end, duration) => {
    const injuryDuration = {
      start: start,
      end: end,
      duration: duration
    };
    this.addInjury(injuryDuration);
  };

  @computed
  get wks() {
    return this.duration < 8
      ? '1wk'
      : this.duration < 15
        ? '2wks'
        : this.duration < 22
          ? '3wks'
          : this.duration < 31
            ? '4wks'
            : this.duration < 61
              ? '8wks'
              : this.duration < 92
                ? '13wks'
                : this.duration < 183
                  ? '26wks'
                  : this.duration < 366
                    ? '52wks'
                    : this.duration < 548 ? '76wks' : this.duration < 730 ? '104wks' : 'longer';
  }

  @action('addInjury')
  addInjury = injuryDuration => {
    this.duration = injuryDuration.duration;
    const newInjury = {
      injuryType: this.userObj.allQs.valInjuryType.answered,
      injuryTypeAndLocation: this.injuryLocation,
      txt: Inj[this.userObj.allQs.valInjuryType.answered][this.injuryLocation].txt,
      injuryDuration: injuryDuration.duration,
      injuryStart: injuryDuration.start,
      injuryEnd: injuryDuration.end,
      injuryValue: Inj[this.userObj.allQs.valInjuryType.answered][this.injuryLocation][this.wks]
    };
    this.userObj.injuries.push(newInjury);
    if (this.userObj.injuries[0].injuryType === 'none') this.userObj.injuries.shift();
    this.updateInjuries();
  };

  @action('setCurrentQ')
  setCurrentQ = nxtQId => {
    this.currentQId =
      nxtQId === 'letter' ? this.letterTemplate : nxtQId === 'injuryLocation' ? 'valInjuryDuration' : nxtQId;
  };

  updateLastQs = () => {
    db.child(`users/${this.userObj.uid}/lastQIds`).update({
      [this.RootStore.UIStore.currentSection]: this.userObj.lastQIds[this.RootStore.UIStore.currentSection]
    });
  };

  updateInjuries = () => {
    db.child(`users/${this.userObj.uid}`).update({ injuries: this.userObj.injuries });
  };

  @action('sendMessage')
  sendMessage = message => {
    this.userObj.messages.push(message);
    this.updateMessages();
  };
  updateMessages = () => {
    db.child(`users/${this.userObj.uid}`).update({
      messages: this.userObj.messages
    });
  };
}
