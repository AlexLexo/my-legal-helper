import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './faqs.css';

@inject('UIStore', 'SessionStore')
@observer
class FAQs extends Component {
  componentWillMount() {
    this.props.UIStore.handleFadeIn();
  }
  render() {
    return (
      <div className="faqs">
        <h1> FAQs </h1>
        <h3>This is where I tell you about how the app works</h3>
        <br />
        <p>I have nothing to say about that just yet!</p>
      </div>
    );
  }
}

export default FAQs;
