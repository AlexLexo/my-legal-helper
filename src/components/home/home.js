import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Bike from './../../assets/BIKE.svg';
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
        <img width="50%" src={Bike} alt="Bike Logo" />
        <h3>
          Free tools and guides <br />helping injured cyclists <br />exercise their rights
        </h3>
        {/*<br />
        <p>Why not check out our FAQs or use our case tool to see if you have a claim?</p>*/}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.props.history.push(`quiz`)}
          name="section1"
        >
          Get Started
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.props.history.push(`faqs`)}
          name="section1"
        >
          Go to FAQs
        </button>
      </div>
    );
  }
}

export default Home;
