import React, { Component } from 'react';
import ReactGA from 'react-ga';
import {
  AccordionGroup,
  AccordionTitle,
  AccordionMenu,
  AccordionItem /*,
  Chevron*/
} from './../styled-components/accordion';
//import ChevronIcon from './../../assets/IMAGES/chevron_icon.svg';

class Accordion extends Component {
  state = { accordionOpen: false };

  onAccordionClick = () => {
    this.setState({ accordionOpen: !this.state.accordionOpen });
    ReactGA.event({
      category: 'content interaction',
      action: `${this.state.collapse ? `opened accordion: ${this.props.id}` : `closed accordion: ${this.props.id}`}`,
      label: this.props.id
    });
  };

  render() {
    return (
      <AccordionGroup>
        <AccordionTitle dark={this.props.dark} onClick={this.onAccordionClick}>
          {this.props.content.title}{' '}
          {/*<Chevron accordionOpen={this.state.accordionOpen} src={ChevronIcon} h="15px" w="15px" />*/}
        </AccordionTitle>
        <AccordionMenu dark={this.props.dark} accordionOpen={this.state.accordionOpen} onClick={this.onAccordionClick}>
          <AccordionItem dark={this.props.dark}>{this.props.content.body}</AccordionItem>
        </AccordionMenu>
      </AccordionGroup>
    );
  }
}

export default Accordion;

/*import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import ReactGA from 'react-ga';

class Accordion extends Component {
  state = { collapse: false, status: 'closed' };

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };
  onEntering = () => {
    this.setState({ status: 'opening' });
    ReactGA.event({
      category: 'content interaction',
      action: `opened accordion: ${this.props.id}`,
      label: this.props.id
    });
  };

  onEntered = () => {
    this.setState({ status: 'opened' });
  };

  onExiting = () => {
    this.setState({ status: 'closing' });
  };

  onExited = () => {
    this.setState({ status: 'closed' });
    ReactGA.event({
      category: 'content interaction',
      action: `closed accordion: ${this.props.id}`,
      label: this.props.id
    });
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
*/
