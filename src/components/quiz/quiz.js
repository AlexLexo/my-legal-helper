import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './quiz.css';

@inject('RootStore')
@observer
class Quiz extends Component {
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
    if (this.props.history.location.pathname === '/quiz') this.props.RootStore.UIStore.setCurrentSection('quiz');
  }

  handleClick = e => {
    this.props.history.push(e.target.name);
    this.props.RootStore.SessionStore.setUserObj();
  };

  render() {
    return (
      <div className="tool-hub container-fluid">
        <div className="col-12">
          <h1>Welcome to Litem.</h1>
          <h3>How can we help you?</h3>
          <div className="btn-tool-hub-group">
            <button
              type="button"
              className="btn btn-primary btn-tool-hub {"
              onClick={e => this.handleClick(e)}
              name="pre-case-tool"
            >
              Do I have a case? / write a letter (takes 5 mins)
            </button>
            <button
              type="button"
              className="btn btn-primary btn-tool-hub {"
              onClick={e => this.handleClick(e)}
              name="pre-valuer-tool"
            >
              What is my case worth? (takes 3 mins)
            </button>
            <button
              type="button"
              className="btn btn-primary btn-tool-hub {"
              onClick={e => this.handleClick(e)}
              name="guides"
            >
              Or would you prefer to read our guides?
            </button>
          </div>
          <p>
            Please bear in mind that we are providing a free legal service for people wanting to settle their case
            themselves. Litem is not a substitute for instructing a lawyer. You should speak with a lawyer if the
            defendants want to fight the case or if it is high value. If you decide that you would prefer to use a
            lawyer, feel free to contact us{' '}
            <span className="span-link" onClick={() => this.props.history.push(`contact`)}>
              here
            </span>{' '}
            or email us at info@litem.co.uk and we will send you some suggestions. We are not paid to recommend these
            law firms and we will never pass your details on to anyone.
          </p>
        </div>
      </div>
    );
  }
}

export default Quiz;
