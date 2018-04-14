import React from 'react';
import BtnGetStarted from './../styled-components/btn-get-started';
import { pageView, handleNavClick } from './../../services/ga-helpers';

const preCase = (
  <React.Fragment>
    <h1>Do I have a good case?</h1>
    <p>
      We're going to ask you some questions to find out a little more about what happened. We'll then give you our view
      about whether you've got a good case.
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
        {preCase}
        <BtnGetStarted onClick={e => handleNavClick(e, this.props.history)} id="get started pre-case" name="case-tool">
          Start
        </BtnGetStarted>
      </div>
    );
  }
}
export default PreTool;
