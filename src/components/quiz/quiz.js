import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './quiz.css';

@inject('UIStore', 'SessionStore')
@observer
class Quiz extends Component {
  componentWillMount() {
    this.props.UIStore.handleFadeIn();
  }

  render() {
    return (
      <div>
        {!this.props.SessionStore.userAuth ? (
          <div>Loading...</div>
        ) : (
          <div className="quiz">
            <h1>Welcome {this.props.SessionStore.userAuth.displayName}!</h1>
            <h3>Where to now?</h3>
            <br />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.props.history.push(`section1`)}
              name="section1"
            >
              Do I have a case?
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.props.history.push(`valuation`)}
              name="section1"
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
