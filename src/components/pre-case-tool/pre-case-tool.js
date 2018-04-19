import React from 'react';
import BtnGetStarted from './../styled-components/btn-get-started';
import P from './../styled-components/p';
import Title from './../styled-components/title';
import Container from './../styled-components/container';

import { pageView, handleNavClick } from './../../services/ga-helpers';

class PreTool extends React.Component {
  componentDidMount() {
    pageView(window.location.pathname);
  }
  render() {
    return (
      <Container dark>
        <Title center dark t="50px">
          Do I have a good case?
        </Title>
        <P justify dark b="50px">
          We're going to ask you some questions to find out a little more about what happened. We'll then give you our
          view about whether you've got a good case.
        </P>
        <BtnGetStarted onClick={e => handleNavClick(e, this.props.history)} id="get started pre-case" name="case-tool">
          Start
        </BtnGetStarted>
      </Container>
    );
  }
}
export default PreTool;
