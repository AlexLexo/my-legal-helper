import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import DOMPurify from 'dompurify';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
//import Modal from './../../modal/modal';<Modal />
import Weak from './weak';
import Advice from './advice';
import Letter from './letter';

import './section-1.css';

@inject('UIStore', 'SessionStore')
@observer
class Section1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      nxtQId: ''
    };
  }

  componentWillMount() {
    this.props.UIStore.handleFadeIn();
  }

  handleChange = e => this.setState({ value: e.target.value, nxtQId: e.target.name });

  handleBtnChange = e => console.log(e);

  handleBtnClick = e => {
    e.preventDefault();
    this.setState({
      value: e.target.dataset['ansid'],
      nxtQId: e.target.dataset['nxtqid'],
      btnValue: e.target.value
    });
  };
  handleBack = () => {
    this.props.SessionStore.handleBack();
    this.setState({
      value: this.props.SessionStore.userObj.allQs[this.props.SessionStore.currentQId].answered
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.SessionStore.userObj.allQs[this.props.SessionStore.currentQId].type === 'weak') return;
    let value =
      this.state.value === ''
        ? this.props.SessionStore.userObj.allQs[this.props.SessionStore.currentQId].answered
        : this.state.value;
    let nxtQId =
      this.state.nxtQId === ''
        ? this.props.SessionStore.userObj.allQs[this.props.SessionStore.currentQId].nxtQId
        : this.state.nxtQId;
    if (this.props.SessionStore.userObj.allQs[this.props.SessionStore.currentQId].type === 'advice') {
      value = 'advice';
      nxtQId = this.props.SessionStore.userObj.allQs[this.props.SessionStore.currentQId].nxtQId;
    }
    console.log(value, nxtQId);
    if (!value || !nxtQId) return alert('please enter something!');
    this.props.SessionStore.handleNext(value, nxtQId);
    this.resetState();
  };
  resetState = () => this.setState({ value: '', nxtQId: '' });

  render() {
    const q = this.props.SessionStore.userObj.allQs[this.props.SessionStore.currentQId];
    const title =
      q.type === 'letter' ? { __html: DOMPurify.sanitize('Letter of Claim') } : { __html: DOMPurify.sanitize(q.title) };
    if (q.type === 'text' || q.type === 'email') {
      this.input = (
        <input
          type={q.type}
          name={q.nxtQId}
          placeholder={q.answered ? q.answered : q.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
        />
      );
    } else if (q.type === 'date') {
      this.input = (
        <input
          type="text"
          name={q.nxtQId}
          placeholder={q.answered ? q.answered : q.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
        />
      );
    } else if (q.type === 'button' || q.type === 'dropdown') {
      this.input = (
        <ToggleButtonGroup
          type="radio"
          name="options"
          value={this.state.value}
          onChange={this.handleBtnChange}
          vertical
        >
          {q.btnvalues.map((item, i) => {
            return (
              <ToggleButton
                key={i}
                data-nxtqid={item.nxtQId}
                data-ansid={item.ansId}
                value={item.ansId}
                onClick={this.handleBtnClick}
                className="btn-primary case-tool-button"
              >
                {item.ansLabel}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      );
    } else if (q.type === 'weak') {
      this.input = <Weak userObj={this.props.SessionStore.userObj} q={q} />;
    } else if (q.type === 'advice') {
      this.input = <Advice userObj={this.props.SessionStore.userObj} q={q} />;
    } else if (q.type === 'letter') {
      this.input = <Letter allQs={this.props.SessionStore.userObj.allQs} q={q} />;
    }
    return (
      <div className={`quiz`}>
        <h1 className={q.type !== 'letter' ? 'show' : 'hide'}>Case Evaluation Tool</h1>
        <h3 className={q.type !== 'letter' ? 'show' : 'hide'} dangerouslySetInnerHTML={title} />
        <form onSubmit={this.handleSubmit}>
          {this.input}
          <br />
          <div className="btn-group bottom-buttons">
            <input
              type="button"
              onClick={this.handleBack}
              value="Back"
              className={`btn btn-secondary ${q.qId === 'cFullName' ? 'disabled' : ''}`}
            />
            <input type="submit" value="Next" className={`btn btn-secondary ${q.type === 'weak' ? 'disabled' : ''}`} />
          </div>
        </form>
      </div>
    );
  }
}

export default Section1;
