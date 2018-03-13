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
      cFullName: this.props.RootStore.SessionStore.userObj.allQs.cFullName.answered,
      cAddress: this.props.RootStore.SessionStore.userObj.allQs.cAddress.answered,
      iDate: this.props.RootStore.SessionStore.userObj.allQs.iDate.answered,
      dFullName: this.props.RootStore.SessionStore.userObj.allQs.dFullName.answered,
      dPolicyNumber: this.props.RootStore.SessionStore.userObj.allQs.dPolicyNumber.answered,
      intro: `On the above date I suffered ${
        this.props.RootStore.SessionStore.userObj.allQs.injured.answered === 'injuredYes'
          ? this.allQs.lossesFinancial.answered === 'lossesFinancialYes' ? 'injuries and financial loss' : 'injuries'
          : 'financial loss'
      } in a road traffic incident caused by ${
        this.props.RootStore.SessionStore.userObj.allQs.writeWho.answered === 'writeWhoDefendant'
          ? 'you'
          : 'your insured'
      }${this.props.RootStore.SessionStore.userObj.allQs.animalType.answered &&
        ` and your ${this.props.RootStore.SessionStore.userObj.allQs.animalType.answered}`}.`,
      circumstancesofIncident1: `On ${
        this.props.RootStore.SessionStore.userObj.allQs.iDate.answered
      } I was a cyclist proceeding ${this.props.RootStore.SessionStore.userObj.allQs.cDir.answered} along ${
        this.props.RootStore.SessionStore.userObj.allQs.cStreet.answered
      }. At all material times, ${
        this.props.RootStore.SessionStore.userObj.allQs.writeWho.answered === 'writeWhoDefendant'
          ? 'you were'
          : 'your insured was'
      } ${this.props.RootStore.SessionStore.userObj.allQs[this.props.RootStore.SessionStore.currentQId].materialTimes}`,
      circumstancesofIncident2: `As I was cycling along ${
        this.props.RootStore.SessionStore.userObj.allQs.cStreet.answered
      } I was heading ${this.props.RootStore.SessionStore.userObj.allQs.cDir.answered}. When I reached the ${
        this.props.RootStore.SessionStore.userObj.allQs.landmark.answered
      } ${
        this.props.RootStore.SessionStore.userObj.allQs[this.props.RootStore.SessionStore.currentQId].afterLandmark
          ? this.props.RootStore.SessionStore.userObj.allQs[this.props.RootStore.SessionStore.currentQId].afterLandmark
          : this.props.RootStore.SessionStore.userObj.allQs.pedDetsCrossedDir.answered === 'pedDetsCrossedDirR' ||
            this.props.RootStore.SessionStore.userObj.allQs.pedDetsRanIntoDir.answered === 'pedDetsRanIntoDirR'
            ? this.props.RootStore.SessionStore.userObj.allQs[this.props.RootStore.SessionStore.currentQId]
                .afterLandmarkR
            : this.props.RootStore.SessionStore.userObj.allQs[this.props.RootStore.SessionStore.currentQId]
                .afterLandmarkL
      } As a result I suffered ${
        this.props.RootStore.SessionStore.userObj.allQs.injured.answered === 'injuredYes'
          ? this.props.RootStore.SessionStore.userObj.allQs.lossesFinancial.answered === 'lossesFinancialYes'
            ? 'injuries and financial loss'
            : 'injuries'
          : 'financial loss'
      }.` /*`As I was cycling along ${
        this.props.RootStore.SessionStore.userObj.allQs.cStreet.answered
      } I was heading ${this.props.RootStore.SessionStore.userObj.allQs.cDir.answered}. When I reached the ${
        this.props.RootStore.SessionStore.userObj.allQs.landmark.answered
      } ${
        this.props.RootStore.SessionStore.userObj.allQs.animalType.answered
          ? this.props.RootStore.SessionStore.userObj.allQs.writeWho.answered === 'writeWhoDefendant'
            ? 'your animal'
            : "your insured's animal"
          : this.props.RootStore.SessionStore.userObj.allQs.writeWho.answered === 'writeWhoDefendant'
            ? 'you'
            : 'your insured'
      } ${
        this.props.RootStore.SessionStore.userObj.allQs[this.props.RootStore.SessionStore.currentQId].afterLandmark
          ? this.props.RootStore.SessionStore.userObj.allQs[this.props.RootStore.SessionStore.currentQId].afterLandmark
          : this.props.RootStore.SessionStore.userObj.allQs.pedDetsCrossedDir.answered === 'pedDetsCrossedDirR'
            ? this.props.RootStore.SessionStore.userObj.allQs[this.props.RootStore.SessionStore.currentQId]
                .afterLandmarkR
            : this.props.RootStore.SessionStore.userObj.allQs[this.props.RootStore.SessionStore.currentQId]
                .afterLandmarkL
      } As a result I suffered ${
        this.props.RootStore.SessionStore.userObj.allQs.injured.answered === 'injuredYes'
          ? this.props.RootStore.SessionStore.userObj.allQs.lossesFinancial.answered === 'lossesFinancialYes'
            ? 'injuries and financial loss'
            : 'injuries'
          : 'financial loss'
      }.`*/
    };
    this.allQs = this.props.RootStore.SessionStore.userObj.allQs;
    this.q = this.props.RootStore.SessionStore.userObj.allQs[this.props.RootStore.SessionStore.currentQId];
    this.be =
      this.props.RootStore.SessionStore.userObj.allQs.writeWho.answered === 'writeWhoDefendant'
        ? 'you were'
        : 'your insured was';
    this.writingTo = this.allQs.writeWho.answered === 'writeWhoDefendant' ? 'you' : 'your insured';
  }

  componentDidMount() {
    this.props.callback(this.state);
  }

  render() {
    const todaysDate = moment().format('Do MMMM YYYY');
    /*const sufferedWhat =
      this.allQs.injured.answered === 'injuredYes'
        ? this.allQs.lossesFinancial.answered === 'lossesFinancialYes' ? 'injuries and financial loss' : 'injuries'
        : 'financial loss';*/
    //const writingTo = this.allQs.writeWho.answered === 'writeWhoDefendant' ? 'you' : 'your insured';
    //const be = this.allQs.writeWho.answered === 'writeWhoDefendant' ? 'you were' : 'your insured was';
    const lossOfEarningsA =
      this.allQs.lossOfEarnings.answered === 'lossOfEarningsYesTimeOff' &&
      this.allQs.lossOfEarningsTo.answered === 'ongoing'
        ? true
        : false;
    const lossOfEarningsB =
      this.allQs.lossOfEarnings.answered === 'lossOfEarningsYesTimeOff' &&
      this.allQs.lossOfEarningsTo.answered !== 'ongoing'
        ? true
        : false;
    const lossOfEarningsC =
      this.allQs.lossOfEarnings.answered === 'lossOfEarningsYesLostJob' &&
      this.allQs.lossOfEarningsTo.answered === 'ongoing'
        ? true
        : false;
    const otherFinancialLosses =
      this.allQs.lossesMed.answered === 'lossesMedYes' ||
      this.allQs.lossesTreatment.answered === 'lossesTreatmentYes' ||
      this.allQs.lossesFinancialOther.answered === 'lossesFinancialOtherYes' ||
      this.allQs.lossesProperty.answered === 'lossesPropertyYes' ||
      this.allQs.lossesTravel.answered === 'lossesTravelYes'
        ? true
        : false;
    /*const circumstancesofIncident1 = `On ${this.allQs.iDate.answered} I was a cyclist proceeding ${
      this.allQs.cDir.answered
    } along ${this.allQs.cStreet.answered}. At all material times, ${this.be} ${this.q.materialTimes}`;*/
    /*const circumstancesofIncident2 = `As I was cycling along ${this.allQs.cStreet.answered} I was heading ${
      this.allQs.cDir.answered
    }. When I reached the ${this.allQs.landmark.answered} ${this.writingTo} ${
      this.q.afterLandmark
        ? this.q.afterLandmark
        : this.allQs.pedDetsCrossedDir.answered === 'pedDetsCrossedDirR' ? this.q.afterLandmarkR : this.q.afterLandmarkL
    } As a result I suffered ${sufferedWhat}.`;*/
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
                  this.props.RootStore.SessionStore.userObj.allQs.writeWho === 'writeWhoDefendant' ? 'hide' : ''
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
                defaultValue={this.props.RootStore.SessionStore.userObj.allQs.cFullName.answered}
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
              {this.allQs.writeWho.answered !== 'writeWhoDefendant' && (
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
        {this.allQs.writeWho.answered !== 'writeWhoDefendant' && (
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
          <li className={this.q.liability1 || 'hide'}>{this.q.liability1}</li>
          <li className={this.q.liability2 || 'hide'}>{this.q.liability2}</li>
          <li className={this.q.liability3 || 'hide'}>{this.q.liability3}</li>
          <li className={this.q.liability4 || 'hide'}>{this.q.liability4}</li>
          <li className={this.q.liability5 || 'hide'}>{this.q.liability5}</li>
          <li className={this.q.liability6 || 'hide'}>{this.q.liability6}</li>
          <li className={this.q.liability7 || 'hide'}>{this.q.liability7}</li>
          <li className={this.q.liability8 || 'hide'}>{this.q.liability8}</li>
          <li className={this.q.liability9 || 'hide'}>{this.q.liability9}</li>
          <li className={this.q.liability10 || 'hide'}>{this.q.liability10}</li>
          <li className={this.q.liability11 || 'hide'}>{this.q.liability11}</li>
        </ol>
        <p>
          {this.q.liabilityResult} {this.writingTo}. I trust you will provide a full admission within the 3 month time
          limit in accordance with the Pre-Action Protocol for Personal Injury Claims in the Civil Procedure Rules.
        </p>
        <div className={this.allQs.injuryDets.answered || 'hide'}>
          <ins>Injuries</ins>
          <p>
            A description of my injuries{this.allQs.suffer.answered === 'sufferYes' && ', which I still suffer from,'}{' '}
            is as follows:
          </p>
          <ul>
            <li className={this.allQs.injuryDets.answered || 'hide'}>{this.allQs.injuryDets.answered}</li>
            <li className={this.allQs.injuryDets01.answered || 'hide'}>{this.allQs.injuryDets01.answered}</li>
            <li className={this.allQs.injuryDets02.answered || 'hide'}>{this.allQs.injuryDets02.answered}</li>
            <li className={this.allQs.injuryDets03.answered || 'hide'}>{this.allQs.injuryDets03.answered}</li>
            <li className={this.allQs.injuryDets04.answered || 'hide'}>{this.allQs.injuryDets04.answered}</li>
            <li className={this.allQs.injuryDets05.answered || 'hide'}>{this.allQs.injuryDets05.answered}</li>
            <li className={this.allQs.injuryDets06.answered || 'hide'}>{this.allQs.injuryDets06.answered}</li>
            <li className={this.allQs.injuryDets07.answered || 'hide'}>{this.allQs.injuryDets07.answered}</li>
            <li className={this.allQs.injuryDets08.answered || 'hide'}>{this.allQs.injuryDets08.answered}</li>
            <li className={this.allQs.injuryDets09.answered || 'hide'}>{this.allQs.injuryDets09.answered}</li>
            <li className={this.allQs.injuryDets10.answered || 'hide'}>{this.allQs.injuryDets10.answered}</li>
          </ul>
          <p className={this.allQs.hospitalWhich.answered || 'hide'}>
            I received treatment for my injuries at {this.allQs.hospitalWhich.answered}.
          </p>
        </div>
        <div className={lossOfEarningsA ? undefined : 'hide'}>
          <ins>Loss of Earnings</ins>
          <p>
            I am employed as a {this.allQs.lossOfEarningsYesTimeOffDets.answered} and have been off work since{' '}
            {this.allQs.lossOfEarningsFrom.answered}.
          </p>
          <p>My approximate net weekly income is {this.allQs.netWeeklyIncome.answered}.</p>
        </div>
        <div className={lossOfEarningsB ? undefined : 'hide'}>
          <ins>Loss of Earnings</ins>
          <p>
            I am employed as a {this.allQs.lossOfEarningsYesTimeOffDets.answered} and was off work between{' '}
            {this.allQs.lossOfEarningsFrom.answered} and {this.allQs.lossOfEarningsTo.answered}.
          </p>
          <p>My approximate net weekly income is {this.allQs.netWeeklyIncome.answered}.</p>
        </div>
        <div className={lossOfEarningsC ? undefined : 'hide'}>
          <ins>Loss of Earnings</ins>
          <p>
            I was employed as a {this.allQs.lossOfEarningsYesTimeOffDets.answered} and have incurred loss of earnings
            since {this.allQs.lossOfEarningsFrom.answered}.
          </p>
          <p>My approximate net weekly income was {this.allQs.netWeeklyIncome.answered}.</p>
        </div>
        <div className={otherFinancialLosses ? undefined : 'hide'}>
          <ins>Other Financial Losses</ins>
          <p>I also estimate that I have incurred the following financial losses:</p>
          <ol>
            <li className={this.allQs.lossesMedDets.answered ? undefined : 'hide'}>
              Medical expenses: {this.allQs.lossesMedDets.answered}
            </li>
            <li className={this.allQs.lossesTreatmentDets.answered ? undefined : 'hide'}>
              Medical treatment: {this.allQs.lossesTreatmentDets.answered}
            </li>
            <li className={this.allQs.lossesPropertyDets.answered ? undefined : 'hide'}>
              Property damage: {this.allQs.lossesPropertyDets.answered}
            </li>
            <li className={this.allQs.lossesTravelDets.answered ? undefined : 'hide'}>
              Travel costs: {this.allQs.lossesTravelDets.answered}
            </li>
            <li className={this.allQs.lossesFinancialOtherDets.answered ? undefined : 'hide'}>
              Other expenses: {this.allQs.lossesFinancialOtherDets.answered}
            </li>
          </ol>
        </div>
        <div className={this.allQs.injuredBy2.answered === 'injuredByRoadDefect' ? undefined : 'hide'}>
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
