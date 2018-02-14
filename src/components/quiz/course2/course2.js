import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';

import Modal from './../../modal/modal';
import './course2.css';

@inject('UIStore', 'SessionStore', 'C2Store')
@observer
class Course2 extends Component {
  componentWillMount() {
    this.props.UIStore.handleFadeIn();
  }
  handleAnswer = e => {
    this.props.C2Store.handleAnswer(e.target.innerHTML);
  };
  render() {
    if (this.props.C2Store.currentQ.q === undefined) {
      return <div />;
    } else {
      return (
        <div className={`quiz ${this.props.C2Store.answered}`}>
          <Modal />
          <h1>{this.props.C2Store.currentQ.q.title}</h1>
          <h3>{this.props.C2Store.currentQ.q.q}</h3>
          <br />
          <ButtonGroup vertical block>
            <Button onClick={this.handleAnswer} active={false}>
              {this.props.C2Store.currentQ.ans1}
            </Button>
            <Button onClick={this.handleAnswer}>
              {this.props.C2Store.currentQ.ans2}
            </Button>
            <Button onClick={this.handleAnswer}>
              {this.props.C2Store.currentQ.ans3}
            </Button>
            <Button onClick={this.handleAnswer}>
              {this.props.C2Store.currentQ.ans4}
            </Button>
          </ButtonGroup>
        </div>
      );
    }
  }
}

export default Course2;
