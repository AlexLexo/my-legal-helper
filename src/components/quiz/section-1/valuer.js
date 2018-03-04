/*import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import DOMPurify from 'dompurify';

import Weak from './weak';
import Buttons from './buttons';
import Dates from './dates';
import Texts from './texts';
import Email from './emails';

@inject('RootStore')
@observer
class Valuer extends Component {
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
      return (
        <div className={`section1`}>
          {/*<h1 className={q.type !== 'letter' ? 'show' : 'hide'}>Case Evaluation Tool</h1>}
          <div className={`section1-title ${q.type !== 'letter' && q.type !== 'advice' ? 'show' : 'hide'}`}>
            <h3 dangerouslySetInnerHTML={title} />
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="input">{this.input}</div>
            <div className="btn-group bottom-button-group">
              <input
                type="button"
                onClick={this.handleBack}
                value="Back"
                className={`btn bottom-button ${q.qId === 'cFullName' ? 'disabled' : ''}`}
              />
              <input
                type="submit"
                value="Next"
                className={`btn bottom-button ${q.type === 'weak' ? 'disabled' : ''}`}
              />
            </div>
          </form>
        </div>
      );
    }
  }
}
export default Valuer;
*/
