import React from 'react';
import Lightbox from './../lightbox/lightbox';

import { pageView } from './../../services/ga-helpers';

class PreTool extends React.Component {
  componentDidMount() {
    pageView(window.location.pathname);
  }
  render() {
    return (
      <div className="pre-tool">
        <h1>Write to the defendant</h1>
        <p>
          We're going to ask you a few questions to find out more about the circumstances of the incident to give you a
          few pointers about the case. Then we'll ask for details for the defendant and where the incident occurred to
          generate a letter to notify the defendants. It will look a little like this:
        </p>
        <Lightbox />
        <br />
        <p>
          If you have the defendant's registration you can find out if they are insured and get the details to notify
          the insurers directly. You need to use the Motor Insurer's Database{' '}
          <a href="http://www.askmid.com/askmidenquiry.aspx" target="_blank" rel="noopener noreferrer">
            here
          </a>{' '}
          which as a fee of £4.
        </p>
      </div>
    );
  }
}
export default PreTool;
