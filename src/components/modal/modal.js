import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Button from 'react-bootstrap/lib/Button';
//import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Modal from 'react-bootstrap/lib/Modal';

import './modal.css';

@inject('UIStore', 'SessionStore')
@observer
class ModalComp extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  store = this.props.C1Store;
  render() {
    const popover = (
      <Popover id="modal-popover" title="tip">
        See a hint and some stats for this question
      </Popover>
    );
    /*const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;*/

    return (
      <div>
        <OverlayTrigger overlay={popover}>
          <Button onClick={this.handleShow} bsClass="pop-btn">
            ?
          </Button>
        </OverlayTrigger>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title componentClass="h2">Here are the statistics for this question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="pop-body">
              <p>Last Answer was: {this.store.q.lastAnsd === 'w' ? 'incorrect' : 'correct'}</p>
              <p>Last saw question: {this.store.q.lastSeen}</p>
              <p>Score: {this.props.C2Store.q.score}</p>
              <p>Times Answered: {this.store.q.timesAnsd}</p>
              <p>Times Correct: {this.store.q.timesRight}</p>
              <p>Hint: {this.store.currentQ.q.hint}</p>
            </div>

            {/*
            <h4>Tooltips in a modal</h4>
            <p>
              there is a{' '}
              <OverlayTrigger overlay={tooltip}>
                <a href="#tooltip">tooltip</a>
              </OverlayTrigger>{' '}
              here
            </p>*/}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalComp;
