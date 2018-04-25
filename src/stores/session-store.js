import { observable, action, computed, useStrict } from 'mobx';
import fire from './../services/fire';
import Data from './data.json';
import Inj from './valuerData.json';

useStrict(true);

export default class mobxSessionStore {
  constructor(rootStore) {
    this.RootStore = rootStore;
  }
  @observable userObj = {};
  @observable currentQId = '';

  setLocal = () => {
    localStorage.setItem('userObj', JSON.stringify(this.userObj));
  };

  @action('setUserObj')
  setUserObj = () => {
    const local = localStorage.getItem('userObj');
    if (localStorage.getItem('userObj') !== null) {
      this.userObj = JSON.parse(local);
    } else {
      this.userObj = {
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
        }
      };
    }
    this.setInitialQ();
  };

  @action('setInitialQ')
  setInitialQ = () => {
    if (this.RootStore.UIStore.currentSection !== 'caseTool' && this.RootStore.UIStore.currentSection !== 'valuer')
      return;
    if (this.userObj.lastQIds === undefined) {
      this.setUserObj();
      return;
    }
    this.currentQId =
      this.userObj.lastQIds[this.RootStore.UIStore.currentSection].length === 1
        ? this.RootStore.UIStore.currentSection === 'caseTool' ? 'moreThan3Years' : 'val0'
        : this.userObj.lastQIds[this.RootStore.UIStore.currentSection].pop();
  };

  @action('handleBack')
  handleBack = () => {
    //prevent handleBack if at begining of tool questions
    if (this.userObj.lastQIds[this.RootStore.UIStore.currentSection].length === 1) return;
    //wipes any answer given for the current question
    this.userObj.allQs[this.currentQId].answered = '';
    //sets the current question to the last question answered
    this.currentQId = this.userObj.lastQIds[this.RootStore.UIStore.currentSection].pop();
  };

  @action('handleNext')
  handleNext = (givenAnswer, nxtQId) => {
    //prevent handleNext if no answer has been given
    //console.log(givenAnswer);
    if (!givenAnswer) return;
    //adds the current question to the list of answered questions
    this.userObj.lastQIds[this.RootStore.UIStore.currentSection].push(this.currentQId);
    //sets the answer to the question to the answer given
    this.userObj.allQs[this.currentQId].answered = givenAnswer;
    //sets the date and time of when the question was answered (not that this is needed!)
    //this.userObj.allQs[this.currentQId].answeredOn = Date.now();
    //sends the id of the next question to be set
    this.setCurrentQ(nxtQId);
    //calls the function to update the localStorage
    this.setLocal();
    //scrolls the window to the top of the page
    window.scrollTo(0, 0);
  };

  @action('setCurrentQ')
  setCurrentQ = nxtQId => {
    this.currentQId =
      nxtQId === 'letter' ? this.letterTemplate : nxtQId === 'injuryLocation' ? 'triageInjuryDuration' : nxtQId;
  };

  @computed
  get letterTemplate() {
    if (this.userObj.allQs.injuredBy.answered === 'injuredByRoadDefect') return 'roadDefectLetter';
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
  };

  @action('setInjuryLocation')
  setInjuryLocation = x => {
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
      injuryType: this.userObj.allQs.triageInjuryType.answered,
      injuryLocation: this.injuryLocation,
      injuryDuration: injuryDuration.duration,
      injuryStart: injuryDuration.start,
      injuryEnd: injuryDuration.end
    };
    //injuryValue: Inj[this.userObj.allQs.triageInjuryType.answered][this.injuryLocation][this.wks]
    this.userObj.injuries.push(newInjury);
    if (this.userObj.injuries[0].injuryType === 'none') this.userObj.injuries.shift();
  };

  @action('sendMessage')
  sendMessage = message => {
    fire
      .database()
      .ref()
      .child(`messages/${Date.now()}`)
      .set(message)
      .then(() => console.log('sent'));
  };
}
