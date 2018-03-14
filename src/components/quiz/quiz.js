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
  /*handleClick = e => {
    this.props.history.push(`section1`);
    //this.props.RootStore.UIStore.setCurrentSection(e.target.name);
  };*/
  render() {
    return (
      <div>
        {!this.props.RootStore.SessionStore.userAuth ? (
          <div>Loading...</div>
        ) : (
          <div className="quiz">
            <h1>Welcome {this.props.RootStore.SessionStore.userAuth.displayName}!</h1>
            <h3>Where to now?</h3>
            <br />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.props.history.push(`case-tool`)}
              name="caseTool"
            >
              Do I have a case?
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.props.history.push(`valuer`)}
              name="valuer"
            >
              Valuation Tool
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;
