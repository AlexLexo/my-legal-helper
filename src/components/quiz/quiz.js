import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { pageView, handleNavClick } from './../../services/ga-helpers';

import P from './../styled-components/p';
import Header from './../styled-components/header';
import Title from './../styled-components/title';
import Btn from './../styled-components/btn';
import BtnGroup from './../styled-components/btn-group';
import Container from './../styled-components/container';
import { Box, Label } from './../styled-components/checkbox';

@inject('RootStore')
@observer
class Quiz extends Component {
  state = {
    show: false
  };
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
    if (this.props.history.location.pathname === '/quiz') this.props.RootStore.UIStore.setCurrentSection('quiz');
  }
  componentDidMount() {
    pageView(window.location.pathname);
    this.props.RootStore.SessionStore.setUserObj();
  }

  render() {
    return (
      <div>
        <Container dark>
          <Title dark>Welcome to Litem.</Title>
          <Header dark>Before we get going...</Header>
          <br />
          <P dark>
            Please bear in mind that we are providing a free legal service for people wanting to settle their case
            themselves. Litem is not a substitute for instructing a lawyer. You should speak with a lawyer if the
            defendants want to fight the case or if it is high value.<br />
            <br />Please tick here to confirm that you have read this
            <input
              type="checkbox"
              style={{ marginLeft: '15px', transform: 'scale(1.3)' }}
              onClick={() => this.setState({ show: !this.state.show })}
            />
          </P>
          <Box id="box" />
          <Label for="box" />
          <div className={this.state.show ? 'show' : 'hide'}>
            <Header dark>Please select one of the following:</Header>
            <br />
            <BtnGroup>
              <Btn onClick={e => handleNavClick(e, this.props.history)} id="tool-hub case" name="pre-case-tool">
                Do I have a case? / write a letter
              </Btn>
              <Btn onClick={e => handleNavClick(e, this.props.history)} id="tool-hub valuer" name="pre-valuer-tool">
                What is my case worth?
              </Btn>
              <Btn onClick={e => handleNavClick(e, this.props.history)} id="tool-hub guides" name="guides">
                Or have a look through our guides?
              </Btn>
            </BtnGroup>
            <br />
            <P dark>
              If you decide that you would prefer to use a lawyer, feel free to contact us{' '}
              <span
                className="span-link"
                onClick={e => handleNavClick(e, this.props.history)}
                id="tool-hub contact"
                name="contact"
              >
                here
              </span>{' '}
              or email us at info@litem.co.uk and we will send you some suggestions. We are not paid to recommend these
              law firms and we will never pass your details on to anyone.
            </P>
          </div>
        </Container>
      </div>
    );
  }
}

export default Quiz;
