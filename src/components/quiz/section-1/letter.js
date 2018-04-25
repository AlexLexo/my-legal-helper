import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import moment from 'moment';

//import Container from './../../styled-components/container';
import LetterInput from './../../styled-components/letter-input';
import Header from './../../styled-components/header';
import P from './../../styled-components/p';
import List from './../../styled-components/list';
import Textarea from 'react-textarea-autosize';

@inject('RootStore')
@observer
class Letter extends Component {
  /*iDate: moment(this.props.allQs.cDOBiDate.answered[1]).format('DD/MM/YYYY'),*/
  state = {
    cFullName: this.props.allQs.cFullName.answered,
    cAddress: this.props.allQs.cAddress.answered,
    iDate: moment(this.props.allQs.iDate.answered).format('DD/MM/YYYY'),
    dFullName: this.props.allQs.dFullName.answered,
    dPolicyNumber: this.props.allQs.dPolicyNumber.answered,
    intro: `On ${moment(this.props.allQs.cDOBiDate.answered[1]).format('dddd Do MMMM YYYY')} I suffered ${
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
    circumstancesofIncident1: `On the above date I was a cyclist proceeding along ${
      this.props.allQs.cStreet.answered
    }. At all material times, ${
      this.props.allQs.writeWho.answered === 'writeWhoDefendant' ? 'you were' : 'your insured was'
    } ${this.props.q.materialTimes}`,
    circumstancesofIncident2: `As I was cycling along ${this.props.allQs.cStreet.answered}, ${
      this.props.q.afterLandmark
        ? this.props.q.afterLandmark
        : this.props.allQs.pedDetsCrossedDir.answered === 'pedDetsCrossedDirR'
          ? `${this.props.allQs.writeWho.answered === 'writeWhoDefendant' ? 'you' : 'your insured'} ${
              this.props.q.afterLandmarkR
            }`
          : `${this.props.allQs.writeWho.answered === 'writeWhoDefendant' ? 'you' : 'your insured'} ${
              this.props.q.afterLandmarkL
            }`
    } ${
      this.props.allQs.trafLights.answered && this.props.allQs.trafLights.answered === 'trafLightsGreen'
        ? 'This occurred at a set of traffic lights which were green at the time in question. '
        : ''
    } As a result I suffered ${
      this.props.allQs.injured.answered === 'injuredYes'
        ? this.props.allQs.lossesFinancial.answered === 'lossesFinancialYes'
          ? 'injuries and financial loss'
          : 'injuries'
        : 'financial loss'
    }.`
  };
  be = this.props.allQs.writeWho.answered === 'writeWhoDefendant' ? 'you were' : 'your insured was';
  writingTo = this.props.allQs.writeWho.answered === 'writeWhoDefendant' ? 'you' : 'your insured';
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
  }
  componentDidMount() {
    this.props.callback(this.state);
  }

  render() {
    const todaysDate = moment().format('Do MMMM YYYY');
    const finTravel =
      this.props.allQs.financialDets.answered[0] === '0' ? false : this.props.allQs.financialDets.answered[0];
    const finTreatment =
      this.props.allQs.financialDets.answered[1] === '0' ? false : this.props.allQs.financialDets.answered[1];
    const finEarnings =
      this.props.allQs.financialDets.answered[2] === '0' ? false : this.props.allQs.financialDets.answered[2];
    const finMedication =
      this.props.allQs.financialDets.answered[3] === '0' ? false : this.props.allQs.financialDets.answered[3];
    const finRepairs =
      this.props.allQs.financialDets.answered[4] === '0' ? false : this.props.allQs.financialDets.answered[4];
    const finCare =
      this.props.allQs.financialDets.answered[5] === '0' ? false : this.props.allQs.financialDets.answered[5];
    return (
      <React.Fragment>
        {this.props.editedLetter || (
          <P t="50px">
            <strong>
              Here is a letter we have prepared for you. Please add your name and address where indicated and make any
              changes needed then click 'next' to get the finished version.
            </strong>
          </P>
        )}
        <div id="completedLetter">
          <P>{todaysDate}</P>
          <P>Dear Sir / Madam</P>
          <P>
            {this.props.editedLetter ? (
              <strong>
                Name: {this.props.RootStore.SessionStore.userObj.editedLetter.cFullName}
                <br />
                Address: {this.props.RootStore.SessionStore.userObj.editedLetter.cAddress}
                <br />
                Incident date: {this.props.RootStore.SessionStore.userObj.editedLetter.iDate}
                {this.state.dPolicyNumber && (
                  <span>
                    <br />
                    Defendant name: {this.props.RootStore.SessionStore.userObj.editedLetter.dFullName}
                    <br />
                    Policy number: {this.props.RootStore.SessionStore.userObj.editedLetter.dPolicyNumber}
                  </span>
                )}
              </strong>
            ) : (
              <strong>
                <LetterInput.Label htmlFor="cFullName">Name:</LetterInput.Label>
                <LetterInput.Input
                  id="cFullName"
                  type="text"
                  required
                  value={this.state.cFullName}
                  onChange={e => this.setState({ cFullName: e.target.value }, () => this.props.callback(this.state))}
                />
                <br />
                <LetterInput.Label htmlFor="cAddress">Address:</LetterInput.Label>
                <LetterInput.Input
                  id="cAddress"
                  type="text"
                  required
                  value={this.state.cAddress}
                  onChange={e => this.setState({ cAddress: e.target.value }, () => this.props.callback(this.state))}
                />
                <br />
                <LetterInput.Label htmlFor="iDate">Incident date:</LetterInput.Label>
                <LetterInput.Input
                  id="iDate"
                  type="text"
                  required
                  value={this.state.iDate}
                  onChange={e => this.setState({ iDate: e.target.value }, () => this.props.callback(this.state))}
                />
                <br />
                {this.state.dPolicyNumber && (
                  <span>
                    <LetterInput.Label htmlFor="dFullName">Defendant name:</LetterInput.Label>
                    <LetterInput.Input
                      id="dFullName"
                      type="text"
                      required
                      value={this.state.dFullName}
                      onChange={e =>
                        this.setState({ dFullName: e.target.value }, () => this.props.callback(this.state))
                      }
                    />
                    <br />
                    <LetterInput.Label htmlFor="dPolicyNumber">Policy number:</LetterInput.Label>
                    <LetterInput.Input
                      id="dPolicyNumber"
                      type="text"
                      required
                      value={this.state.dPolicyNumber}
                      onChange={e =>
                        this.setState({ dPolicyNumber: e.target.value }, () => this.props.callback(this.state))
                      }
                    />
                  </span>
                )}
              </strong>
            )}
          </P>
          {this.props.editedLetter ? (
            <P>{this.props.RootStore.SessionStore.userObj.editedLetter.intro}</P>
          ) : (
            <React.Fragment>
              <Textarea
                style={{
                  width: '90%',
                  fontSize: '1.2rem',
                  maxWidth: '550px',
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  padding: '10px'
                }}
                value={this.state.intro}
                onChange={e => this.setState({ intro: e.target.value }, () => this.props.callback(this.state))}
              />
              <br />
            </React.Fragment>
          )}
          {this.props.allQs.writeWho.answered === 'writeWhoDefendant' && (
            <React.Fragment>
              <P>
                <ins>Insurance</ins>
              </P>
              <P>
                Please confirm the identity of your insurers. Please note that the insurers will need to see this letter
                as soon as possible and it may affect your insurance cover and/or the conduct of any subsequent legal
                proceedings if you do not send this letter to them.
              </P>
            </React.Fragment>
          )}
          <React.Fragment>
            <P>
              <ins>Circumstances of Incident</ins>
            </P>
            {this.props.editedLetter ? (
              <React.Fragment>
                <P>{this.props.RootStore.SessionStore.userObj.editedLetter.circumstancesofIncident1}</P>
                <P>{this.props.RootStore.SessionStore.userObj.editedLetter.circumstancesofIncident2}</P>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Textarea
                  style={{
                    width: '90%',
                    fontSize: '1.2rem',
                    maxWidth: '550px',
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    padding: '10px'
                  }}
                  value={this.state.circumstancesofIncident1}
                  onChange={e =>
                    this.setState({ circumstancesofIncident1: e.target.value }, () => this.props.callback(this.state))
                  }
                />
                <br />
                <Textarea
                  style={{
                    width: '90%',
                    fontSize: '1.2rem',
                    maxWidth: '550px',
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    padding: '10px'
                  }}
                  value={this.state.circumstancesofIncident2}
                  onChange={e =>
                    this.setState({ circumstancesofIncident2: e.target.value }, () => this.props.callback(this.state))
                  }
                />
                <br />
              </React.Fragment>
            )}
          </React.Fragment>
          <P>
            <ins>Liability</ins>
          </P>
          <P>
            I am alleging fault against{' '}
            {this.props.allQs.dooredDets.answered === 'dooredDetsPassenger' &&
              'the passenger of the vehicle belonging to '}
            {this.writingTo} for the following reasons:-
          </P>
          <List.OrderedList>
            <List.Item hide={!this.props.q.liability1}>{this.props.q.liability1}</List.Item>
            <List.Item hide={!this.props.q.liability2}>{this.props.q.liability2}</List.Item>
            <List.Item hide={!this.props.q.liability3}>{this.props.q.liability3}</List.Item>
            <List.Item hide={!this.props.q.liability4}>{this.props.q.liability4}</List.Item>
            <List.Item hide={!this.props.q.liability5}>{this.props.q.liability5}</List.Item>
            <List.Item hide={!this.props.q.liability6}>{this.props.q.liability6}</List.Item>
            <List.Item hide={!this.props.q.liability7}>{this.props.q.liability7}</List.Item>
            <List.Item hide={!this.props.q.liability8}>{this.props.q.liability8}</List.Item>
            <List.Item hide={!this.props.q.liability9}>{this.props.q.liability9}</List.Item>
            <List.Item hide={!this.props.q.liability10}>{this.props.q.liability10}</List.Item>
            <List.Item hide={!this.props.q.liability11}>{this.props.q.liability11}</List.Item>
          </List.OrderedList>
          <P>
            {this.props.q.liabilityResult} {this.writingTo}. I trust you will provide a full admission within the 3
            month time limit in accordance with the Pre-Action Protocol for Personal Injury Claims in the Civil
            Procedure Rules.
          </P>
          {this.props.allQs.injuryDets.answered && (
            <React.Fragment>
              <P>
                <ins>Injuries</ins>
              </P>
              <P>
                A description of my injuries{this.props.allQs.suffer.answered === 'sufferYes' &&
                  ', which I still suffer from,'}{' '}
                is as follows:
              </P>
              <List.OrderedList>
                <List.Item hide={!this.props.allQs.injuryDets.answered}>
                  {this.props.allQs.injuryDets.answered}
                </List.Item>
                <List.Item hide={!this.props.allQs.injuryDets01.answered}>
                  {this.props.allQs.injuryDets01.answered}
                </List.Item>
                <List.Item hide={!this.props.allQs.injuryDets02.answered}>
                  {this.props.allQs.injuryDets02.answered}
                </List.Item>
                <List.Item hide={!this.props.allQs.injuryDets03.answered}>
                  {this.props.allQs.injuryDets03.answered}
                </List.Item>
                <List.Item hide={!this.props.allQs.injuryDets04.answered}>
                  {this.props.allQs.injuryDets04.answered}
                </List.Item>
                <List.Item hide={!this.props.allQs.injuryDets05.answered}>
                  {this.props.allQs.injuryDets05.answered}
                </List.Item>
                <List.Item hide={!this.props.allQs.injuryDets06.answered}>
                  {this.props.allQs.injuryDets06.answered}
                </List.Item>
                <List.Item hide={!this.props.allQs.injuryDets07.answered}>
                  {this.props.allQs.injuryDets07.answered}
                </List.Item>
                <List.Item hide={!this.props.allQs.injuryDets08.answered}>
                  {this.props.allQs.injuryDets08.answered}
                </List.Item>
                <List.Item hide={!this.props.allQs.injuryDets09.answered}>
                  {this.props.allQs.injuryDets09.answered}
                </List.Item>
                <List.Item hide={!this.props.allQs.injuryDets10.answered}>
                  {this.props.allQs.injuryDets10.answered}
                </List.Item>
              </List.OrderedList>
              <P hide={!this.props.allQs.hospitalWhich.answered}>
                I received treatment for my injuries at {this.props.allQs.hospitalWhich.answered}.
              </P>
            </React.Fragment>
          )}
          {/*this.props.allQs.injured.answered === 'injuredYes' && (
          <React.Fragment>
            <P>
              <ins>Injuries</ins>
            </P>
            <P>I suffered the following injuries:</P>
            <List.OrderedList>
              {this.props.injuries.map((item, i) => {
                return (
                  <List.Item key={i}>
                    {item.injuryType} to my {item.injuryLocation} which started on {item.injuryStart}{' '}
                    {isNaN(item.injuryEnd) ||
                      (item.injuryEnd &&
                        `and lasted for ${item.injuryDuration} ${item.injuryDuration < 2 ? 'day' : 'days'}.`)}
                  </List.Item>
                );
              })}
            </List.OrderedList>
          </React.Fragment>
        )*/}
          {this.props.allQs.lossesFinancial.answered === 'lossesFinancialYes' && (
            <React.Fragment>
              <P>
                <ins>Financial Losses</ins>
              </P>
              <P>I suffered the following financial losses:</P>
              <List.OrderedList>
                {finTravel && <List.Item>Travel - £{finTravel}</List.Item>}
                {finTreatment && <List.Item>Treatment - £{finTreatment}</List.Item>}
                {finEarnings && <List.Item>Lost earnings - £{finEarnings}</List.Item>}
                {finMedication && <List.Item>Medical expenses - £{finMedication}</List.Item>}
                {finRepairs && <List.Item>Damage to property - £{finRepairs}</List.Item>}
                {finCare && <List.Item>Other - £{finCare}</List.Item>}
              </List.OrderedList>
            </React.Fragment>
          )}

          {this.props.allQs.injuredBy.answered === 'injuredByRoadDefect' && (
            <React.Fragment>
              <P>
                <ins>Disclosure</ins>
              </P>
              <P>Please provide me with copies of the following documents:</P>
              <List.OrderedList>
                <List.Item>
                  Records of inspection for 12 months prior to and following the date of the incident.
                </List.Item>
                <List.Item>
                  Details of any other incidents in respect of the stretch of highway in question for 12 months prior to
                  and following the date of the incident.
                </List.Item>
                <List.Item>
                  Details of any other complaints regarding the stretch of highway in question 12 months prior to and
                  following the date of the incident.
                </List.Item>
              </List.OrderedList>
            </React.Fragment>
          )}
          <P>
            <ins>Finally</ins>
          </P>
          <P>Finally, I expect an acknowledgement of this letter within 21 days.</P>
          <P b="150px">Yours faithfully</P>
        </div>
      </React.Fragment>
    );
  }
}

export default Letter;
