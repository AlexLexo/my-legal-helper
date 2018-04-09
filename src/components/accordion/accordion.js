import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

class Accordion extends Component {
  state = { collapse: false, status: 'closed' };

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };
  onEntering = () => {
    this.setState({ status: 'opening' });
  };

  onEntered = () => {
    this.setState({ status: 'opened' });
  };

  onExiting = () => {
    this.setState({ status: 'closing' });
  };

  onExited = () => {
    this.setState({ status: 'closed' });
  };

  render() {
    return (
      <div className="container-fluid">
        <div
          className="row accordion-item"
          style={{
            marginTop: '10px',
            lineHeight: '3rem'
          }}
          onClick={this.toggle}
        >
          <div className="col-12">
            <div
              style={{
                backgroundColor: '#3cc',
                color: 'white',
                borderRadius: '15px'
              }}
            >
              <strong
                style={{
                  marginLeft: '20px'
                }}
              >
                {this.props.content.title}
              </strong>
              <span className={`oi oi-chevron-right float-right ${this.state.status}`} aria-hidden="true" />
            </div>
            <Collapse
              isOpen={this.state.collapse}
              onEntering={this.onEntering}
              onEntered={this.onEntered}
              onExiting={this.onExiting}
              onExited={this.onExited}
            >
              <div
                style={{
                  lineHeight: '1.5rem',
                  paddingTop: '10px',
                  width: '95%'
                }}
              >
                {this.props.content.body}
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
