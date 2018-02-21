import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './quiz.css';

@inject('UIStore', 'SessionStore')
@observer
class Quiz extends Component {
  componentWillMount() {
    this.props.UIStore.handleFadeIn();
  }
  handleClick = e => {
    this.props.history.push(`section1`);
  };

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
            <div>
              <button type="button" className="btn btn-secondary btn-block" onClick={this.handleClick} name="section1">
                Let's get started
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;
