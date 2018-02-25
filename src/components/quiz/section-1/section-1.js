import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import DOMPurify from 'dompurify';

import Weak from './weak';
import Advice from './advice';
import Letter from './letter';
import Buttons from './buttons';
import Dates from './dates';
import Texts from './texts';
import Email from './emails';

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
    if (!value || !nxtQId) return alert('please enter something!');
    this.props.SessionStore.handleNext(value, nxtQId);
    this.resetState();
  };
  resetState = () => this.setState({ value: '', nxtQId: '' });

  render() {
    const q = this.props.SessionStore.userObj.allQs[this.props.SessionStore.currentQId];
    const title = q.type === 'letter' ? { __html: DOMPurify.sanitize('x') } : { __html: DOMPurify.sanitize(q.title) };
    if (q.type === 'text') {
      this.input = <Texts q={q} value={this.state.value} callback={(v, n) => this.setState({ value: v, nxtQId: n })} />;
    } else if (q.type === 'email') {
      this.input = <Email q={q} value={this.state.value} callback={(v, n) => this.setState({ value: v, nxtQId: n })} />;
    } else if (q.type === 'date') {
      this.input = <Dates q={q} value={this.state.value} callback={(v, n) => this.setState({ value: v, nxtQId: n })} />;
    } else if (q.type === 'button' || q.type === 'dropdown') {
      this.input = <Buttons btnvalues={q.btnvalues} callback={(v, n) => this.setState({ value: v, nxtQId: n })} />;
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
          <div className="btn-group bottom-button-group">
            <input
              type="button"
              onClick={this.handleBack}
              value="Back"
              className={`btn btn-primary bottom-button ${q.qId === 'cFullName' ? 'disabled' : ''}`}
            />
            <input
              type="submit"
              value="Next"
              className={`btn btn-primary bottom-button ${q.type === 'weak' ? 'disabled' : ''}`}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Section1;
