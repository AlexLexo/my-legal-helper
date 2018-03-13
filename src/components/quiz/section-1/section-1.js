import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import DOMPurify from 'dompurify';
import moment from 'moment';

import Weak from './weak';
import Advice from './advice';
import Letter from './letter';
//import EditedLetter from './edited-letter';
import Valuation from './valuation';
import Financial from './financial-inputs';
import InjuryDuration from './injury-duration-inputs';
import Buttons from './buttons';
import Dates from './dates';
import Texts from './texts';
import Email from './emails';

@inject('RootStore')
@observer
class Section1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      nxtQId: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      editedLetter: false
    };
    this.qs = null;
    this.qId = null;
  }

  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
  }

  handleBack = () => {
    if (this.state.editedLetter) this.setState({ editedLetter: false });
    //this.state.editedLetter = this.editedLetter && false;
    this.props.RootStore.SessionStore.handleBack();
  };

  handleClick = e => {
    this.props.history.push(e.target.name === 'caseTool' ? 'section1' : e.target.name);
    this.props.RootStore.UIStore.setCurrentSection(e.target.name);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.qs[this.qId].type === 'weak') return;
    if (this.qId === 'valInjuryDuration') {
      //injuryDuration
      const injuryStart = moment(this.state.value1, 'DD/MM/YYYY');
      const injuryEnd = moment(this.state.value2, 'DD/MM/YYYY');
      const injuryDuration = injuryEnd.diff(injuryStart, 'days');
      this.props.RootStore.SessionStore.setInjuryDuration(this.state.value1, this.state.value2, injuryDuration);
      this.postSubmit();
    } else if (this.qId === 'iDate') {
      //timeBarred
      const dob = moment(this.qs.cDOB.answered, 'DD/MM/YYYY');
      const accidentDate = moment(this.state.value, 'DD/MM/YYYY');
      const nowMinus3 = moment().subtract(3, 'years');
      const turned21On = moment(dob, 'DD/MM/YYYY').add(21, 'years');
      if (moment(accidentDate).isBefore(nowMinus3) && moment(turned21On).isBefore(moment())) {
        console.log('timebarred');
        this.setState({ nxtQId: 'timeBarred' }, () => this.postSubmit());
      } else {
        console.log('not timebarred');
        this.postSubmit();
      }
    } else if (this.state.nxtQId === 'injuryLocation') {
      //set injury location
      this.props.RootStore.SessionStore.setInjuryLocation(this.state.value);
      this.postSubmit();
    } else if (this.qs[this.qId].type === 'letter') {
      //go to edited letter
      this.props.RootStore.SessionStore.setEditedLetter(this.state.value, this.state.nxtQId);
      this.setState({ editedLetter: true });
      //this.resetState();
      //this.postSubmit();
    } else {
      this.postSubmit();
    }
  };

  postSubmit = () => {
    let value =
      this.state.value === 'multiValue'
        ? [
            this.state.value1,
            this.state.value2,
            this.state.value3,
            this.state.value4,
            this.state.value5,
            this.state.value6
          ]
        : this.state.value === '' ? this.qs[this.qId].answered : this.state.value;
    let nxtQId = this.state.nxtQId === '' ? this.qs[this.qId].nxtQId : this.state.nxtQId;
    if (this.qs[this.qId].type === 'advice') value = 'advice';
    if (!value || !nxtQId) return alert('please enter something!');
    this.props.RootStore.SessionStore.handleNext(value, nxtQId);
    this.resetState();
  };

  resetState = () =>
    this.setState({
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      nxtQId: ''
    });

  render() {
    this.qs = this.props.RootStore.SessionStore.userObj.allQs;
    this.qId = this.props.RootStore.SessionStore.currentQId;
    const qType = this.qs[this.qId].type;
    const title =
      this.qs[this.qId].type === 'letter'
        ? { __html: DOMPurify.sanitize('x') }
        : { __html: DOMPurify.sanitize(this.qs[this.qId].title) };
    switch (qType) {
      case 'text':
        this.input = (
          <Texts
            q={this.qs[this.qId]}
            value={this.state.value}
            callback={(v, n) => this.setState({ value: v, nxtQId: n })}
          />
        );
        break;
      case 'email':
        this.input = (
          <Email
            q={this.qs[this.qId]}
            value={this.state.value}
            callback={(v, n) => this.setState({ value: v, nxtQId: n })}
          />
        );
        break;
      case 'date':
        this.input = (
          <Dates
            q={this.qs[this.qId]}
            value={this.state.value}
            callback={(v, n) => this.setState({ value: v, nxtQId: n })}
          />
        );
        break;
      case 'button':
        this.input = (
          <Buttons
            q={this.qs[this.qId]}
            value={this.state.value}
            callback={(v, n) => this.setState({ value: v, nxtQId: n })}
          />
        );
        break;
      case 'dropdown':
        this.input = (
          <Buttons
            q={this.qs[this.qId]}
            value={this.state.value}
            callback={(v, n) => this.setState({ value: v, nxtQId: n })}
          />
        );
        break;
      case 'weak':
        this.input = <Weak userObj={this.props.RootStore.SessionStore.userObj} q={this.qs[this.qId]} />;
        break;
      case 'advice':
        this.input = (
          <Advice
            userObj={this.props.RootStore.SessionStore.userObj}
            q={this.qs[this.qId]}
            history={this.props.history}
            setSection={x => this.props.RootStore.UIStore.setCurrentSection(x)}
          />
        );
        break;
      case 'letter':
        this.input = (
          <Letter
            history={this.props.history}
            editedLetter={this.state.editedLetter}
            callback={v =>
              this.setState({
                value: v,
                nxtQId: this.qId
              })
            }
          />
        );
        break;
      /*case 'editedLetter':
        this.input = <EditedLetter edits={this.props.RootStore.SessionStore.userObj.editedLetter} />;
        break;*/
      case 'financialInputs':
        this.input = (
          <Financial
            allQs={this.qs}
            q={this.qs[this.qId]}
            callback={(p, v, n) => this.setState({ value: 'multiValue', [p]: v, nxtQId: n })}
          />
        );
        break;
      case 'injuryDurationInputs':
        this.input = (
          <InjuryDuration
            allQs={this.qs}
            q={this.qs[this.qId]}
            callback={(p, v, n) => this.setState({ value: 'multiValue', [p]: v, nxtQId: n })}
          />
        );
        break;
      case 'valuation':
        this.input = (
          <Valuation
            allQs={this.qs}
            q={this.qs[this.qId]}
            injuries={this.props.RootStore.SessionStore.userObj.injuries}
          />
        );
        break;
      default:
        break;
    }
    return (
      <div className={`section1`}>
        <div
          className={`section1-title ${
            this.qs[this.qId].type !== 'letter' &&
            this.qs[this.qId].type !== 'valuation' &&
            this.qs[this.qId].type !== 'advice'
              ? 'show'
              : 'hide'
          }`}
        >
          {this.qs[this.qId].qId === 'val0' ? (
            <p dangerouslySetInnerHTML={title} />
          ) : (
            <h3 dangerouslySetInnerHTML={title} />
          )}
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="input">{this.input}</div>
          <div className="btn-group bottom-button-group">
            {this.qs[this.qId].qId !== 'val0' ? (
              <input
                type="button"
                onClick={this.handleBack}
                value="Back"
                className={`btn bottom-button ${this.qs[this.qId].qId === 'cFullName' ? 'disabled' : ''}`}
              />
            ) : (
              <input
                type="button"
                onClick={this.handleClick}
                value="Go to Case Tool"
                name="caseTool"
                className={`btn bottom-button`}
              />
            )}
            <input
              type="button"
              onClick={this.handleClick}
              value="Get in Touch"
              name="contact"
              className={`btn bottom-button`}
            />
            <input
              type="submit"
              value="Next"
              className={`btn bottom-button ${this.qs[this.qId].type === 'weak' ? 'disabled' : ''}`}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Section1;
