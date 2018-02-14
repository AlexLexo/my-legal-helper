import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';

import './quiz.css';

@inject('UIStore', 'SessionStore', 'C1Store', 'C2Store')
@observer
class Quiz extends Component {
  componentWillMount() {
    this.props.UIStore.handleFadeIn();
  }
  handleClick = e => {
    const target = e.target.name;
    const uid = this.props.SessionStore.user.user.uid;
    const courseData = this.props.SessionStore.user.courses[target].qs;
    const hist = this.props.history;
    if (target === 'c1') {
      this.props.C1Store.getCourse(uid, courseData, hist);
    } else if (target === 'c2' && courseData[0].qId === 'q001') {
      this.props.C2Store.getCourse(uid, courseData, hist);
    }
  };

  render() {
    return (
      <div>
        {!this.props.SessionStore.user.user.name ? (
          <div>Loading...</div>
        ) : (
          <div className="quiz">
            <h1>Welcome {this.props.SessionStore.user.user.name}!</h1>
            <h3>Please select a Course</h3>
            <br />
            <ButtonGroup vertical block>
              <Button onClick={this.handleClick} name="c1">
                Course 1
              </Button>
              <Button onClick={this.handleClick} name="c2">
                Course 2
              </Button>
            </ButtonGroup>
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;
