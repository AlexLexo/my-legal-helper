import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Bike from './../../assets/BIKE.svg';
import './home.css';

@inject('RootStore')
@observer
class Home extends Component {
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
  }
  handleClick = e => {
    this.props.history.push(e.target.name);
  };
  render() {
    return (
      <div className="home">
        <h1> My Legal Helper </h1>
        <img width="50%" src={Bike} alt="Bike Logo" />
        <h3>
          Free tools and guides <br />helping injured cyclists <br />exercise their rights
        </h3>
        <button type="button" className="btn btn-primary" onClick={this.handleClick} name="quiz">
          Get Started
        </button>
        <button type="button" className="btn btn-primary" onClick={this.handleClick} name="faqs">
          Go to FAQs
        </button>
      </div>
    );
  }
}

export default Home;
