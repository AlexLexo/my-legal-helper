import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import * as Scroll from 'react-scroll';
import { pageView, handleNavClick } from './../../services/ga-helpers';

import P from './../styled-components/p';
import Header from './../styled-components/header';
import Title from './../styled-components/title';
import Btn from './../styled-components/btn';
import BtnGroup from './../styled-components/btn-group';
import Container from './../styled-components/container';
import Checkbox from './../styled-components/checkbox';

@inject('RootStore')
@observer
class ToolHub extends Component {
  state = {
    show: false
  };
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
    if (this.props.history.location.pathname === '/tool-hub')
      this.props.RootStore.UIStore.setCurrentSection('tool-hub');
  }
  componentDidMount() {
    pageView(window.location.pathname);
    this.props.RootStore.SessionStore.setUserObj();
  }

  render() {
    return (
      <Container t="50px" dark>
        <Title center dark>
          Welcome to Litem.
        </Title>
        <Header center dark>
          Before we get going...
        </Header>
        <P dark>
          Litem is for quick advice on any cycling incident from hit and runs to potholes. We provide a free legal
          service - it's not a substitute for a lawyer and we accept no liability if it all goes wrong.<br />
          <br />Please tick once you've read this
          <Checkbox
            onClick={() => {
              this.setState({ show: !this.state.show });
              if (!this.state.show) Scroll.animateScroll.scrollToBottom();
            }}
          />
        </P>
        <div className={this.state.show ? 'show' : 'hide'}>
          <Header dark>Please select one of the following:</Header>
          <BtnGroup>
            <Btn b="20px" onClick={e => handleNavClick(e, this.props.history)} id="tool-hub case" name="pre-case-tool">
              Do I have a case?
            </Btn>
            <Btn
              b="20px"
              onClick={e => handleNavClick(e, this.props.history)}
              id="tool-hub valuer"
              name="pre-valuer-tool"
            >
              What is my case worth?
            </Btn>
            <Btn b="20px" onClick={e => handleNavClick(e, this.props.history)} id="tool-hub guides" name="guides">
              Or have a look through our guides?
            </Btn>
          </BtnGroup>
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
    );
  }
}

export default ToolHub;
