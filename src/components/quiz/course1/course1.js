import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import DOMPurify from 'dompurify';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';

import Modal from './../../modal/modal';
import './course1.css';

@inject('UIStore', 'SessionStore', 'C1Store')
@observer
class Course1 extends Component {
  componentWillMount() {
    this.props.UIStore.handleFadeIn();
  }
  handleAnswer = e => {
    this.props.C1Store.handleAnswer(e.target.innerHTML);
  };

  render() {
    if (this.props.C1Store.currentQ.q === undefined) {
      return <div />;
    } else {
      const title = {
        __html: DOMPurify.sanitize(this.props.C1Store.currentQ.q.title)
      };
      const q = {
        __html: DOMPurify.sanitize(this.props.C1Store.currentQ.q.q)
      };
      const ans1 = {
        __html: DOMPurify.sanitize(this.props.C1Store.currentQ.ans1)
      };
      const ans2 = {
        __html: DOMPurify.sanitize(this.props.C1Store.currentQ.ans2)
      };
      const ans3 = {
        __html: DOMPurify.sanitize(this.props.C1Store.currentQ.ans3)
      };
      const ans4 = {
        __html: DOMPurify.sanitize(this.props.C1Store.currentQ.ans4)
      };
      return (
        <div className={`quiz ${this.props.C1Store.answered}`}>
          <Modal />
          <h1 dangerouslySetInnerHTML={title} />

          <h3 dangerouslySetInnerHTML={q} className="c1-q" />

          <br />
          <ButtonGroup vertical block>
            <Button
              onClick={this.handleAnswer}
              dangerouslySetInnerHTML={ans1}
            />

            <Button
              onClick={this.handleAnswer}
              dangerouslySetInnerHTML={ans2}
            />
            <Button
              onClick={this.handleAnswer}
              dangerouslySetInnerHTML={ans3}
            />
            <Button
              onClick={this.handleAnswer}
              dangerouslySetInnerHTML={ans4}
            />
          </ButtonGroup>
        </div>
      );
    }
  }
}

export default Course1;
