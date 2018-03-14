import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './faqs.css';

@inject('RootStore')
@observer
class FAQs extends Component {
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
    if (this.props.history.location.pathname === '/faqs') this.props.RootStore.UIStore.setCurrentSection('faqs');
  }
  /*handleClick = e => {
    this.props.history.push(`section1`);
    this.props.RootStore.UIStore.setCurrentSection(e.target.name);
  };*/
  render() {
    return (
      <div className="faqs">
        <h1> FAQs </h1>
        <h3>Is this right for me?</h3>
        <p className="text-justify">
          If you are seriously injured you should always get help from a solicitor. However, in more straightforward
          cases a solicitor may add little value and you can often settle the case yourself. A solicitor will usually
          take 25% of your damages in legal fees, so it is important to decide whether they will add value to your case.
          These tools and guides are designed to help you make that decision and guide you through the case if you want
          to do it yourself.
        </p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.props.history.push(`case-tool`)}
          name="caseTool"
        >
          Do I have a case?
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.props.history.push(`valuer`)}
          name="valuer"
        >
          Valuation Tool
        </button>
      </div>
    );
  }
}

export default FAQs;
