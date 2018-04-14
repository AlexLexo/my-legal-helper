import React from 'react';
import BtnGetStarted from './../styled-components/btn-get-started';
import { pageView, handleNavClick } from './../../services/ga-helpers';

const preValuer = (
  <React.Fragment>
    <h1>What is my case worth?</h1>
    <p>
      Please note that this tool is not completely accurate and your case might be worth more or less than the tool
      suggests. We are just giving you the best guess from the information given. If you want a more accurate valuation
      please speak with a solicitor.
    </p>
    <p>
      This tool is not for valuing fatal cases or serious injuries. In these circumstances you should speak with a
      solicitor.
    </p>
    <p>
      It is important that you are honest when you come to value your case. There can be severe penalties for
      dishonesty. See this guide for more details.
    </p>
  </React.Fragment>
);

class PreTool extends React.Component {
  componentDidMount() {
    pageView(window.location.pathname);
  }
  render() {
    return (
      <div className="pre-tool">
        {preValuer}
        <BtnGetStarted onClick={e => handleNavClick(e, this.props.history)} id="get started pre-valuer" name="valuer">
          Start
        </BtnGetStarted>
      </div>
    );
  }
}
export default PreTool;
