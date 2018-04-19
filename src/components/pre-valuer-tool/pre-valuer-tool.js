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
        <Title dark t="50px" b="10px">
          What is my case worth?
        </Title>
        <P dark>
          Please note that this tool is not completely accurate and your case might be worth more or less than the tool
          suggests. We are just giving you the best guess from the information given. If you want a more accurate
          valuation please speak with a solicitor.
        </P>
        <P dark>
          This tool is not for valuing fatal cases or serious injuries. In these circumstances you should speak with a
          solicitor.
        </P>
        <P dark b="50px">
          It is important that you are honest when you come to value your case. There can be severe penalties for
          dishonesty. See this guide for more details.
        </P>
        <BtnGetStarted onClick={e => handleNavClick(e, this.props.history)} id="get started pre-valuer" name="valuer">
          Start
        </BtnGetStarted>
      </Container>
    );
  }
}
export default PreTool;
