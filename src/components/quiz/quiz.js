import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './quiz.css';

@inject('RootStore')
@observer
class Quiz extends Component {
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
    if (this.props.history.location.pathname === '/quiz') this.props.RootStore.UIStore.setCurrentSection('quiz');
  }
  /*handleClick = e => {
    this.props.history.push(`section1`);
    //this.props.RootStore.UIStore.setCurrentSection(e.target.name);
  };*/
  render() {
    return (
      <div>
        {!this.props.RootStore.SessionStore.userAuth ? (
          <div>Loading...</div>
        ) : (
          <div className="quiz">
            <h1>Welcome to Litem.</h1>
            <h3>How can we help you?</h3>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.props.history.push(`case-tool`)}
              name="caseTool"
            >
              Do I have a good case / notify defendant of case (takes 5 mins)
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.props.history.push(`valuer`)}
              name="valuer"
            >
              What is my case worth (takes 3 mins)
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.props.history.push(`valuer`)}
              name="valuer"
            >
              Or would you prefer to read our guides
            </button>
            <p>
              Please bear in mind that we are providing a free legal service for people wanting to settle their case
              themselves. Litem is not a substitute for instructing a lawyer. You should speak with a lawyer if the
              defendants want to fight the case or if it is high value. If you decide that you would prefer to use a
              lawyer, feel free to contact us{' '}
              <span className="span-link" onClick={() => this.props.history.push(`contact`)}>
                here
              </span>{' '}
              or email us at info@litem.co.uk and we will send you some suggestions. We are not paid to recommend these
              law firms and we will never pass your details on to anyone.
            </p>
            {/*<h1>Welcome {this.props.RootStore.SessionStore.userAuth.displayName}!</h1>
            <h1>Where to now?</h1>
            <h3>Is this right for me?</h3>
            <p>
              If you are seriously injured you should always get help from a solicitor. However, in more straightforward
              cases a solicitor may add little value and you can often settle the case yourself. A solicitor will
              usually take 25% of your damages in legal fees, so it is important to decide whether they will add value
              to your case. These tools and guides are designed to help you make that decision and guide you through the
              case if you want to do it yourself.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.props.history.push(`case-tool`)}
              name="caseTool"
            >
              Case & Letter Tool
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.props.history.push(`valuer`)}
              name="valuer"
            >
              Valuation Tool
            </button>*/}
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;
