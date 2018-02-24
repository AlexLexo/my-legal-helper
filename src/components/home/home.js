import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './home.css';

@inject('UIStore', 'SessionStore')
@observer
class Home extends Component {
  componentWillMount() {
    this.props.UIStore.handleFadeIn();
  }
  render() {
    return (
      <div className="home">
        <h1> My Legal Helper </h1>
        <h3>
          Free tools and guides <br />helping injured cyclists <br />exercise their rights
        </h3>
        <br />
        <p>Why not check out our FAQs or use our case tool to see if you have a claim?</p>
      </div>
    );
  }
}

export default Home;
