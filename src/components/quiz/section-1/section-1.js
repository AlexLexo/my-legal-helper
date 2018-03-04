import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import DOMPurify from 'dompurify';

import Weak from './weak';
import Advice from './advice';
import Letter from './letter';
import Valuation from './valuation';
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
      nxtQId: ''
    };
  }

  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
  }

  handleBack = () => {
    this.props.RootStore.SessionStore.handleBack();
    this.setState({
      value: this.props.RootStore.SessionStore.userObj.allQs[this.props.RootStore.SessionStore.currentQId].answered
    });
  };

  handleClick = e => {
    this.props.history.push(e.target.name === 'caseTool' ? 'section1' : e.target.name);
    this.props.RootStore.UIStore.setCurrentSection(e.target.name);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.RootStore.SessionStore.userObj.allQs[this.props.RootStore.SessionStore.currentQId].type === 'weak')
      return;
    let value =
      this.state.value === ''
        ? this.props.RootStore.SessionStore.userObj.allQs[this.props.RootStore.SessionStore.currentQId].answered
        : this.state.value;
    let nxtQId =
      this.state.nxtQId === ''
        ? this.props.RootStore.SessionStore.userObj.allQs[this.props.RootStore.SessionStore.currentQId].nxtQId
        : this.state.nxtQId;
    if (
      this.props.RootStore.SessionStore.userObj.allQs[this.props.RootStore.SessionStore.currentQId].type === 'advice'
    ) {
      value = 'advice';
      nxtQId = this.props.RootStore.SessionStore.userObj.allQs[this.props.RootStore.SessionStore.currentQId].nxtQId;
    }
    if (!value || !nxtQId) return alert('please enter something!');
    this.props.RootStore.SessionStore.handleNext(value, nxtQId);
    this.resetState();
  };
  resetState = () => this.setState({ value: '', nxtQId: '' });

  render() {
    const q = this.props.RootStore.SessionStore.userObj.allQs[this.props.RootStore.SessionStore.currentQId];
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
      this.input = <Weak userObj={this.props.RootStore.SessionStore.userObj} q={q} />;
    } else if (q.type === 'advice') {
      this.input = (
        <Advice
          userObj={this.props.RootStore.SessionStore.userObj}
          q={q}
          history={this.props.history}
          setSection={x => this.props.RootStore.UIStore.setCurrentSection(x)}
        />
      );
    } else if (q.type === 'letter') {
      this.input = (
        <Letter allQs={this.props.RootStore.SessionStore.userObj.allQs} q={q} history={this.props.history} />
      );
    } else if (q.type === 'valuation') {
      this.input = <Valuation allQs={this.props.RootStore.SessionStore.userObj.allQs} q={q} />;
    }
    return (
      <div className={`section1`}>
        <div className={`section1-title ${q.type !== 'letter' && q.type !== 'advice' ? 'show' : 'hide'}`}>
          {q.qId === 'val0' ? <p dangerouslySetInnerHTML={title} /> : <h3 dangerouslySetInnerHTML={title} />}
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="input">{this.input}</div>
          <div className="btn-group bottom-button-group">
            {q.qId !== 'val0' ? (
              <input
                type="button"
                onClick={this.handleBack}
                value="Back"
                className={`btn bottom-button ${q.qId === 'cFullName' ? 'disabled' : ''}`}
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
            <input type="submit" value="Next" className={`btn bottom-button ${q.type === 'weak' ? 'disabled' : ''}`} />
          </div>
        </form>
      </div>
    );
  }
}

export default Section1;
