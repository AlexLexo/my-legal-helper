import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import Textarea from 'react-textarea-autosize';

@inject('RootStore')
@observer
class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cFullName: this.props.allQs.cFullName.answered,
      cAddress: this.props.allQs.cAddress.answered,
      iDate: this.props.allQs.iDate.answered,
      dFullName: this.props.allQs.dFullName.answered,
      dPolicyNumber: this.props.allQs.dPolicyNumber.answered,
      intro: `On the above date I suffered ${
        this.props.allQs.injured.answered === 'injuredYes'
          ? this.props.allQs.lossesFinancial.answered === 'lossesFinancialYes'
            ? 'injuries and financial loss'
            : 'injuries'
          : 'financial loss'
      } in a road traffic incident caused by ${
        this.props.allQs.writeWho.answered === 'writeWhoDefendant' ? 'you' : 'your insured'
      }${this.props.allQs.animalType.answered &&
        (this.props.allQs.writeWho.answered === 'writeWhoDefendant'
          ? ` and your ${this.props.allQs.animalType.answered}`
          : ` and their ${this.props.allQs.animalType.answered}`)}.`,
      circumstancesofIncident1: `On ${this.props.allQs.iDate.answered} I was a cyclist proceeding ${
        this.props.allQs.cDir.answered
      } along ${this.props.allQs.cStreet.answered}. At all material times, ${
        this.props.allQs.writeWho.answered === 'writeWhoDefendant' ? 'you were' : 'your insured was'
      } ${this.props.q.materialTimes}`,
      circumstancesofIncident2: `As I was cycling along ${this.props.allQs.cStreet.answered} I was heading ${
        this.props.allQs.cDir.answered
      }. When I reached the ${this.props.allQs.landmark.answered} ${
        this.props.q.afterLandmark
          ? this.props.q.afterLandmark
          : this.props.allQs.pedDetsCrossedDir.answered === 'pedDetsCrossedDirR' ||
            this.props.allQs.pedDetsRanIntoDir.answered === 'pedDetsRanIntoDirR'
            ? this.props.q.afterLandmarkR
            : this.props.q.afterLandmarkL
      } As a result I suffered ${
        this.props.allQs.injured.answered === 'injuredYes'
          ? this.props.allQs.lossesFinancial.answered === 'lossesFinancialYes'
            ? 'injuries and financial loss'
            : 'injuries'
          : 'financial loss'
      }.`
    };
    this.be = this.props.allQs.writeWho.answered === 'writeWhoDefendant' ? 'you were' : 'your insured was';
    this.writingTo = this.props.allQs.writeWho.answered === 'writeWhoDefendant' ? 'you' : 'your insured';
  }

  componentDidMount() {
    this.props.callback(this.state);
  }

  render() {
    const todaysDate = moment().format('Do MMMM YYYY');
    const lossOfEarningsA =
      this.props.allQs.lossOfEarnings.answered === 'lossOfEarningsYesTimeOff' &&
      this.props.allQs.lossOfEarningsTo.answered === 'ongoing'
        ? true
        : false;
    const lossOfEarningsB =
      this.props.allQs.lossOfEarnings.answered === 'lossOfEarningsYesTimeOff' &&
      this.props.allQs.lossOfEarningsTo.answered !== 'ongoing'
        ? true
        : false;
    const lossOfEarningsC =
      this.props.allQs.lossOfEarnings.answered === 'lossOfEarningsYesLostJob' &&
      this.props.allQs.lossOfEarningsTo.answered === 'ongoing'
        ? true
        : false;
    const otherFinancialLosses =
      this.props.allQs.lossesMed.answered === 'lossesMedYes' ||
      this.props.allQs.lossesTreatment.answered === 'lossesTreatmentYes' ||
      this.props.allQs.lossesFinancialOther.answered === 'lossesFinancialOtherYes' ||
      this.props.allQs.lossesProperty.answered === 'lossesPropertyYes' ||
      this.props.allQs.lossesTravel.answered === 'lossesTravelYes'
        ? true
        : false;
    return (
      <div className="letter text-justify">
        <p>{todaysDate}</p>
        <p>Dear Sirs</p>
        <p>
          {this.props.editedLetter ? (
            <strong>
              Name: {this.props.RootStore.SessionStore.userObj.editedLetter.cFullName}
              <br />
              Address: {this.props.RootStore.SessionStore.userObj.editedLetter.cAddress}
              <br />
              Incident date: {this.props.RootStore.SessionStore.userObj.editedLetter.iDate}
              <span className={this.props.allQs.writeWho === 'writeWhoDefendant' ? 'hide' : ''}>
                <br />
                Defendant name: {this.props.RootStore.SessionStore.userObj.editedLetter.dFullName}
                <br />
                Policy number: {this.props.RootStore.SessionStore.userObj.editedLetter.dPolicyNumber}
              </span>
            </strong>
          ) : (
            <strong>
              <label htmlFor="cFullName">Name:</label>
              <input
                id="cFullName"
                type="text"
                defaultValue={this.props.allQs.cFullName.answered}
                onChange={e =>
                  this.props.callback({ cFullName: e.target.value }, () => this.props.callback(this.state))
                }
              />
              <br />
              <label htmlFor="cAddress">Address:</label>
              <input
                id="cAddress"
                type="text"
                value={this.state.cAddress}
                onChange={e => this.setState({ cAddress: e.target.value }, () => this.props.callback(this.state))}
              />
              <br />
              <label htmlFor="iDate">Incident date:</label>
              <input
                id="iDate"
                type="text"
                value={this.state.iDate}
                onChange={e => this.setState({ iDate: e.target.value }, () => this.props.callback(this.state))}
              />
              <br />
              {this.props.allQs.writeWho.answered !== 'writeWhoDefendant' && (
                <span>
                  <label htmlFor="dFullName">Defendant name:</label>
                  <input
                    id="dFullName"
                    type="text"
                    value={this.state.dFullName}
                    onChange={e => this.setState({ dFullName: e.target.value }, () => this.props.callback(this.state))}
                  />
                  <br />
                  <label htmlFor="dPolicyNumber">Policy number:</label>
                  <input
                    id="dPolicyNumber"
                    type="text"
                    value={this.state.dPolicyNumber}
                    onChange={e =>
                      this.setState({ dPolicyNumber: e.target.value }, () => this.props.callback(this.state))
                    }
                  />
                </span>
              )}
            </strong>
          )}
        </p>
        {this.props.editedLetter ? (
          <p>{this.props.RootStore.SessionStore.userObj.editedLetter.intro}</p>
        ) : (
          <div>
            <Textarea
              style={{ width: '100%' }}
              value={this.state.intro}
              onChange={e => this.setState({ intro: e.target.value }, () => this.props.callback(this.state))}
            />
            <br />
          </div>
        )}
        {this.props.allQs.writeWho.answered !== 'writeWhoDefendant' && (
          <div>
            <ins>Insurance</ins>
            <p>
              Please confirm the identity of your insurers. Please note that the insurers will need to see this letter
              as soon as possible and it may affect your insurance cover and/or the conduct of any subsequent legal
              proceedings if you do not send this letter to them.
            </p>
          </div>
        )}

        <ins>Circumstances of Incident</ins>
        {this.props.editedLetter ? (
          <div>
            <p>{this.props.RootStore.SessionStore.userObj.editedLetter.circumstancesofIncident1}</p>
            <p>{this.props.RootStore.SessionStore.userObj.editedLetter.circumstancesofIncident2}</p>
          </div>
        ) : (
          <div>
            <Textarea
              style={{ width: '100%' }}
              value={this.state.circumstancesofIncident1}
              onChange={e =>
                this.setState({ circumstancesofIncident1: e.target.value }, () => this.props.callback(this.state))
              }
            />
            <br />
            <Textarea
              style={{ width: '100%' }}
              value={this.state.circumstancesofIncident2}
              onChange={e =>
                this.setState({ circumstancesofIncident2: e.target.value }, () => this.props.callback(this.state))
              }
            />
            <br />
          </div>
        )}
        <ins>Liability</ins>
        <p>I am alleging fault against {this.writingTo} for the following reasons:-</p>
        <ol>
          <li className={this.props.q.liability1 || 'hide'}>{this.props.q.liability1}</li>
          <li className={this.props.q.liability2 || 'hide'}>{this.props.q.liability2}</li>
          <li className={this.props.q.liability3 || 'hide'}>{this.props.q.liability3}</li>
          <li className={this.props.q.liability4 || 'hide'}>{this.props.q.liability4}</li>
          <li className={this.props.q.liability5 || 'hide'}>{this.props.q.liability5}</li>
          <li className={this.props.q.liability6 || 'hide'}>{this.props.q.liability6}</li>
          <li className={this.props.q.liability7 || 'hide'}>{this.props.q.liability7}</li>
          <li className={this.props.q.liability8 || 'hide'}>{this.props.q.liability8}</li>
          <li className={this.props.q.liability9 || 'hide'}>{this.props.q.liability9}</li>
          <li className={this.props.q.liability10 || 'hide'}>{this.props.q.liability10}</li>
          <li className={this.props.q.liability11 || 'hide'}>{this.props.q.liability11}</li>
        </ol>
        <p>
          {this.props.q.liabilityResult} {this.writingTo}. I trust you will provide a full admission within the 3 month
          time limit in accordance with the Pre-Action Protocol for Personal Injury Claims in the Civil Procedure Rules.
        </p>
        <div className={this.props.allQs.injuryDets.answered || 'hide'}>
          <ins>Injuries</ins>
          <p>
            A description of my injuries{this.props.allQs.suffer.answered === 'sufferYes' &&
              ', which I still suffer from,'}{' '}
            is as follows:
          </p>
          <ul>
            <li className={this.props.allQs.injuryDets.answered || 'hide'}>{this.props.allQs.injuryDets.answered}</li>
            <li className={this.props.allQs.injuryDets01.answered || 'hide'}>
              {this.props.allQs.injuryDets01.answered}
            </li>
            <li className={this.props.allQs.injuryDets02.answered || 'hide'}>
              {this.props.allQs.injuryDets02.answered}
            </li>
            <li className={this.props.allQs.injuryDets03.answered || 'hide'}>
              {this.props.allQs.injuryDets03.answered}
            </li>
            <li className={this.props.allQs.injuryDets04.answered || 'hide'}>
              {this.props.allQs.injuryDets04.answered}
            </li>
            <li className={this.props.allQs.injuryDets05.answered || 'hide'}>
              {this.props.allQs.injuryDets05.answered}
            </li>
            <li className={this.props.allQs.injuryDets06.answered || 'hide'}>
              {this.props.allQs.injuryDets06.answered}
            </li>
            <li className={this.props.allQs.injuryDets07.answered || 'hide'}>
              {this.props.allQs.injuryDets07.answered}
            </li>
            <li className={this.props.allQs.injuryDets08.answered || 'hide'}>
              {this.props.allQs.injuryDets08.answered}
            </li>
            <li className={this.props.allQs.injuryDets09.answered || 'hide'}>
              {this.props.allQs.injuryDets09.answered}
            </li>
            <li className={this.props.allQs.injuryDets10.answered || 'hide'}>
              {this.props.allQs.injuryDets10.answered}
            </li>
          </ul>
          <p className={this.props.allQs.hospitalWhich.answered || 'hide'}>
            I received treatment for my injuries at {this.props.allQs.hospitalWhich.answered}.
          </p>
        </div>
        <div className={lossOfEarningsA ? undefined : 'hide'}>
          <ins>Loss of Earnings</ins>
          <p>
            I am employed as a {this.props.allQs.lossOfEarningsYesTimeOffDets.answered} and have been off work since{' '}
            {this.props.allQs.lossOfEarningsFrom.answered}.
          </p>
          <p>My approximate net weekly income is {this.props.allQs.netWeeklyIncome.answered}.</p>
        </div>
        <div className={lossOfEarningsB ? undefined : 'hide'}>
          <ins>Loss of Earnings</ins>
          <p>
            I am employed as a {this.props.allQs.lossOfEarningsYesTimeOffDets.answered} and was off work between{' '}
            {this.props.allQs.lossOfEarningsFrom.answered} and {this.props.allQs.lossOfEarningsTo.answered}.
          </p>
          <p>My approximate net weekly income is {this.props.allQs.netWeeklyIncome.answered}.</p>
        </div>
        <div className={lossOfEarningsC ? undefined : 'hide'}>
          <ins>Loss of Earnings</ins>
          <p>
            I was employed as a {this.props.allQs.lossOfEarningsYesTimeOffDets.answered} and have incurred loss of
            earnings since {this.props.allQs.lossOfEarningsFrom.answered}.
          </p>
          <p>My approximate net weekly income was {this.props.allQs.netWeeklyIncome.answered}.</p>
        </div>
        <div className={otherFinancialLosses ? undefined : 'hide'}>
          <ins>Other Financial Losses</ins>
          <p>I also estimate that I have incurred the following financial losses:</p>
          <ol>
            <li className={this.props.allQs.lossesMedDets.answered ? undefined : 'hide'}>
              Medical expenses: {this.props.allQs.lossesMedDets.answered}
            </li>
            <li className={this.props.allQs.lossesTreatmentDets.answered ? undefined : 'hide'}>
              Medical treatment: {this.props.allQs.lossesTreatmentDets.answered}
            </li>
            <li className={this.props.allQs.lossesPropertyDets.answered ? undefined : 'hide'}>
              Property damage: {this.props.allQs.lossesPropertyDets.answered}
            </li>
            <li className={this.props.allQs.lossesTravelDets.answered ? undefined : 'hide'}>
              Travel costs: {this.props.allQs.lossesTravelDets.answered}
            </li>
            <li className={this.props.allQs.lossesFinancialOtherDets.answered ? undefined : 'hide'}>
              Other expenses: {this.props.allQs.lossesFinancialOtherDets.answered}
            </li>
          </ol>
        </div>
        <div className={this.props.allQs.injuredBy2.answered === 'injuredByRoadDefect' ? undefined : 'hide'}>
          <ins>Disclosure</ins>
          <p>Please provide me with copies of the following documents:</p>
          <ol>
            <li>Records of inspection for 12 months prior to and following the date of the incident.</li>
            <li>
              Details of any other incidents in respect of the stretch of highway in question for 12 months prior to and
              following the date of the incident.
            </li>
            <li>
              Details of any other complaints regarding the stretch of highway in question 12 months prior to and
              following the date of the incident.
            </li>
          </ol>
        </div>
        <ins>Finally</ins>
        <p>Finally, I expect an acknowledgement of this letter within 21 days.</p>
        <p>Yours faithfully</p>
      </div>
    );
  }
}

export default Letter;

/*import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import Textarea from 'react-textarea-autosize';

@inject('RootStore')
@observer
class Letter extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      cFullName: this.props.allQs.cFullName.answered,
      cAddress: this.props.allQs.cAddress.answered,
      iDate: this.props.allQs.iDate.answered,
      dFullName: this.props.allQs.dFullName.answered,
      dPolicyNumber: this.props.allQs.dPolicyNumber.answered,
      intro: `On the above date I suffered ${
        this.props.allQs.injured.answered === 'injuredYes'
          ? this.props.allQs.lossesFinancial.answered === 'lossesFinancialYes' ? 'injuries and financial loss' : 'injuries'
          : 'financial loss'
      } in a road traffic incident caused by ${
        this.props.allQs.writeWho.answered === 'writeWhoDefendant'
          ? 'you'
          : 'your insured'
      }${this.props.allQs.animalType.answered &&
        ` and your ${this.props.allQs.animalType.answered}`}.`,
      circumstancesofIncident1: `On ${
        this.props.allQs.iDate.answered
      } I was a cyclist proceeding ${this.props.allQs.cDir.answered} along ${
        this.props.allQs.cStreet.answered
      }. At all material times, ${
        this.props.allQs.writeWho.answered === 'writeWhoDefendant'
          ? 'you were'
          : 'your insured was'
      } ${this.props.q.materialTimes}`,
      circumstancesofIncident2: `As I was cycling along ${
        this.props.allQs.cStreet.answered
      } I was heading ${this.props.allQs.cDir.answered}. When I reached the ${
        this.props.allQs.landmark.answered
      } ${
        this.props.q.afterLandmark
          ? this.props.q.afterLandmark
          : this.props.allQs.pedDetsCrossedDir.answered === 'pedDetsCrossedDirR' ||
            this.props.allQs.pedDetsRanIntoDir.answered === 'pedDetsRanIntoDirR'
            ? this.props.q
                .afterLandmarkR
            : this.props.q
                .afterLandmarkL
      } As a result I suffered ${
        this.props.allQs.injured.answered === 'injuredYes'
          ? this.props.allQs.lossesFinancial.answered === 'lossesFinancialYes'
            ? 'injuries and financial loss'
            : 'injuries'
          : 'financial loss'
      }.`
    };
    this.props.allQs = this.props.allQs;
    this.props.q = this.props.q;
    this.be =
      this.props.allQs.writeWho.answered === 'writeWhoDefendant'
        ? 'you were'
        : 'your insured was';
    this.writingTo = this.props.allQs.writeWho.answered === 'writeWhoDefendant' ? 'you' : 'your insured';
  }

  componentDidMount() {
    this.props.callback(this.state);
  }

  render() {
    const todaysDate = moment().format('Do MMMM YYYY');
    const lossOfEarningsA =
      this.props.allQs.lossOfEarnings.answered === 'lossOfEarningsYesTimeOff' &&
      this.props.allQs.lossOfEarningsTo.answered === 'ongoing'
        ? true
        : false;
    const lossOfEarningsB =
      this.props.allQs.lossOfEarnings.answered === 'lossOfEarningsYesTimeOff' &&
      this.props.allQs.lossOfEarningsTo.answered !== 'ongoing'
        ? true
        : false;
    const lossOfEarningsC =
      this.props.allQs.lossOfEarnings.answered === 'lossOfEarningsYesLostJob' &&
      this.props.allQs.lossOfEarningsTo.answered === 'ongoing'
        ? true
        : false;
    const otherFinancialLosses =
      this.props.allQs.lossesMed.answered === 'lossesMedYes' ||
      this.props.allQs.lossesTreatment.answered === 'lossesTreatmentYes' ||
      this.props.allQs.lossesFinancialOther.answered === 'lossesFinancialOtherYes' ||
      this.props.allQs.lossesProperty.answered === 'lossesPropertyYes' ||
      this.props.allQs.lossesTravel.answered === 'lossesTravelYes'
        ? true
        : false;
    return (
      <div className="letter text-justify">
        <p>{todaysDate}</p>
        <p>Dear Sirs</p>
        <p>
          {this.props.editedLetter ? (
            <strong>
              Name: {this.props.RootStore.SessionStore.userObj.editedLetter.cFullName}
              <br />
              Address: {this.props.RootStore.SessionStore.userObj.editedLetter.cAddress}
              <br />
              Incident date: {this.props.RootStore.SessionStore.userObj.editedLetter.iDate}
              <br />
              <span
                className={
                  this.props.allQs.writeWho === 'writeWhoDefendant' ? 'hide' : ''
                }
              >
                Defendant name: {this.props.RootStore.SessionStore.userObj.editedLetter.dFullName}
                <br />
                Policy number: {this.props.RootStore.SessionStore.userObj.editedLetter.dPolicyNumber}
              </span>
            </strong>
          ) : (
            <strong>
              <label htmlFor="cFullName">Name:</label>
              <input
                id="cFullName"
                type="text"
                defaultValue={this.props.allQs.cFullName.answered}
                onChange={e =>
                  this.props.callback({ cFullName: e.target.value }, () => this.props.callback(this.state))
                }
              />
              <br />
              <label htmlFor="cAddress">Address:</label>
              <input
                id="cAddress"
                type="text"
                value={this.state.cAddress}
                onChange={e => this.setState({ cAddress: e.target.value }, () => this.props.callback(this.state))}
              />
              <br />
              <label htmlFor="iDate">Incident date:</label>
              <input
                id="iDate"
                type="text"
                value={this.state.iDate}
                onChange={e => this.setState({ iDate: e.target.value }, () => this.props.callback(this.state))}
              />
              <br />
              {this.props.allQs.writeWho.answered !== 'writeWhoDefendant' && (
                <span>
                  <label htmlFor="dFullName">Defendant name:</label>
                  <input
                    id="dFullName"
                    type="text"
                    value={this.state.dFullName}
                    onChange={e => this.setState({ dFullName: e.target.value }, () => this.props.callback(this.state))}
                  />
                  <br />
                  <label htmlFor="dPolicyNumber">Policy number:</label>
                  <input
                    id="dPolicyNumber"
                    type="text"
                    value={this.state.dPolicyNumber}
                    onChange={e =>
                      this.setState({ dPolicyNumber: e.target.value }, () => this.props.callback(this.state))
                    }
                  />
                </span>
              )}
            </strong>
          )}
        </p>
        {this.props.editedLetter ? (
          <p>{this.props.RootStore.SessionStore.userObj.editedLetter.intro}</p>
        ) : (
          <Textarea
            style={{ width: '100%' }}
            value={this.state.intro}
            onChange={e => this.setState({ intro: e.target.value }, () => this.props.callback(this.state))}
          />
        )}
        {this.props.allQs.writeWho.answered !== 'writeWhoDefendant' && (
          <div>
            <ins>Insurance</ins>
            <p>
              Please confirm the identity of your insurers. Please note that the insurers will need to see this letter
              as soon as possible and it may affect your insurance cover and/or the conduct of any subsequent legal
              proceedings if you do not send this letter to them.
            </p>
          </div>
        )}

        <ins>Circumstances of Incident</ins>
        {this.props.editedLetter ? (
          <div>
            <p>{this.props.RootStore.SessionStore.userObj.editedLetter.circumstancesofIncident1}</p>
            <p>{this.props.RootStore.SessionStore.userObj.editedLetter.circumstancesofIncident2}</p>
          </div>
        ) : (
          <div>
            <Textarea
              style={{ width: '100%' }}
              value={this.state.circumstancesofIncident1}
              onChange={e =>
                this.setState({ circumstancesofIncident1: e.target.value }, () => this.props.callback(this.state))
              }
            />
            <br />
            <Textarea
              style={{ width: '100%' }}
              value={this.state.circumstancesofIncident2}
              onChange={e =>
                this.setState({ circumstancesofIncident2: e.target.value }, () => this.props.callback(this.state))
              }
            />
          </div>
        )}
        <ins>Liability</ins>
        <p>I am alleging fault against {this.writingTo} for the following reasons:-</p>
        <ol>
          <li className={this.props.q.liability1 || 'hide'}>{this.props.q.liability1}</li>
          <li className={this.props.q.liability2 || 'hide'}>{this.props.q.liability2}</li>
          <li className={this.props.q.liability3 || 'hide'}>{this.props.q.liability3}</li>
          <li className={this.props.q.liability4 || 'hide'}>{this.props.q.liability4}</li>
          <li className={this.props.q.liability5 || 'hide'}>{this.props.q.liability5}</li>
          <li className={this.props.q.liability6 || 'hide'}>{this.props.q.liability6}</li>
          <li className={this.props.q.liability7 || 'hide'}>{this.props.q.liability7}</li>
          <li className={this.props.q.liability8 || 'hide'}>{this.props.q.liability8}</li>
          <li className={this.props.q.liability9 || 'hide'}>{this.props.q.liability9}</li>
          <li className={this.props.q.liability10 || 'hide'}>{this.props.q.liability10}</li>
          <li className={this.props.q.liability11 || 'hide'}>{this.props.q.liability11}</li>
        </ol>
        <p>
          {this.props.q.liabilityResult} {this.writingTo}. I trust you will provide a full admission within the 3 month time
          limit in accordance with the Pre-Action Protocol for Personal Injury Claims in the Civil Procedure Rules.
        </p>
        <div className={this.props.allQs.injuryDets.answered || 'hide'}>
          <ins>Injuries</ins>
          <p>
            A description of my injuries{this.props.allQs.suffer.answered === 'sufferYes' && ', which I still suffer from,'}{' '}
            is as follows:
          </p>
          <ul>
            <li className={this.props.allQs.injuryDets.answered || 'hide'}>{this.props.allQs.injuryDets.answered}</li>
            <li className={this.props.allQs.injuryDets01.answered || 'hide'}>{this.props.allQs.injuryDets01.answered}</li>
            <li className={this.props.allQs.injuryDets02.answered || 'hide'}>{this.props.allQs.injuryDets02.answered}</li>
            <li className={this.props.allQs.injuryDets03.answered || 'hide'}>{this.props.allQs.injuryDets03.answered}</li>
            <li className={this.props.allQs.injuryDets04.answered || 'hide'}>{this.props.allQs.injuryDets04.answered}</li>
            <li className={this.props.allQs.injuryDets05.answered || 'hide'}>{this.props.allQs.injuryDets05.answered}</li>
            <li className={this.props.allQs.injuryDets06.answered || 'hide'}>{this.props.allQs.injuryDets06.answered}</li>
            <li className={this.props.allQs.injuryDets07.answered || 'hide'}>{this.props.allQs.injuryDets07.answered}</li>
            <li className={this.props.allQs.injuryDets08.answered || 'hide'}>{this.props.allQs.injuryDets08.answered}</li>
            <li className={this.props.allQs.injuryDets09.answered || 'hide'}>{this.props.allQs.injuryDets09.answered}</li>
            <li className={this.props.allQs.injuryDets10.answered || 'hide'}>{this.props.allQs.injuryDets10.answered}</li>
          </ul>
          <p className={this.props.allQs.hospitalWhich.answered || 'hide'}>
            I received treatment for my injuries at {this.props.allQs.hospitalWhich.answered}.
          </p>
        </div>
        <div className={lossOfEarningsA ? undefined : 'hide'}>
          <ins>Loss of Earnings</ins>
          <p>
            I am employed as a {this.props.allQs.lossOfEarningsYesTimeOffDets.answered} and have been off work since{' '}
            {this.props.allQs.lossOfEarningsFrom.answered}.
          </p>
          <p>My approximate net weekly income is {this.props.allQs.netWeeklyIncome.answered}.</p>
        </div>
        <div className={lossOfEarningsB ? undefined : 'hide'}>
          <ins>Loss of Earnings</ins>
          <p>
            I am employed as a {this.props.allQs.lossOfEarningsYesTimeOffDets.answered} and was off work between{' '}
            {this.props.allQs.lossOfEarningsFrom.answered} and {this.props.allQs.lossOfEarningsTo.answered}.
          </p>
          <p>My approximate net weekly income is {this.props.allQs.netWeeklyIncome.answered}.</p>
        </div>
        <div className={lossOfEarningsC ? undefined : 'hide'}>
          <ins>Loss of Earnings</ins>
          <p>
            I was employed as a {this.props.allQs.lossOfEarningsYesTimeOffDets.answered} and have incurred loss of earnings
            since {this.props.allQs.lossOfEarningsFrom.answered}.
          </p>
          <p>My approximate net weekly income was {this.props.allQs.netWeeklyIncome.answered}.</p>
        </div>
        <div className={otherFinancialLosses ? undefined : 'hide'}>
          <ins>Other Financial Losses</ins>
          <p>I also estimate that I have incurred the following financial losses:</p>
          <ol>
            <li className={this.props.allQs.lossesMedDets.answered ? undefined : 'hide'}>
              Medical expenses: {this.props.allQs.lossesMedDets.answered}
            </li>
            <li className={this.props.allQs.lossesTreatmentDets.answered ? undefined : 'hide'}>
              Medical treatment: {this.props.allQs.lossesTreatmentDets.answered}
            </li>
            <li className={this.props.allQs.lossesPropertyDets.answered ? undefined : 'hide'}>
              Property damage: {this.props.allQs.lossesPropertyDets.answered}
            </li>
            <li className={this.props.allQs.lossesTravelDets.answered ? undefined : 'hide'}>
              Travel costs: {this.props.allQs.lossesTravelDets.answered}
            </li>
            <li className={this.props.allQs.lossesFinancialOtherDets.answered ? undefined : 'hide'}>
              Other expenses: {this.props.allQs.lossesFinancialOtherDets.answered}
            </li>
          </ol>
        </div>
        <div className={this.props.allQs.injuredBy2.answered === 'injuredByRoadDefect' ? undefined : 'hide'}>
          <ins>Disclosure</ins>
          <p>Please provide me with copies of the following documents:</p>
          <ol>
            <li>Records of inspection for 12 months prior to and following the date of the incident.</li>
            <li>
              Details of any other incidents in respect of the stretch of highway in question for 12 months prior to and
              following the date of the incident.
            </li>
            <li>
              Details of any other complaints regarding the stretch of highway in question 12 months prior to and
              following the date of the incident.
            </li>
          </ol>
        </div>
        <ins>Finally</ins>
        <p>Finally, I expect an acknowledgement of this letter within 21 days.</p>
        <p>Yours faithfully</p>
      </div>
    );
  }
}

export default Letter;*/
