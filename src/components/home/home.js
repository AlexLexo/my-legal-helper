import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import LogoDark from './../../assets/LITEM_LOGO_FINAL.svg';
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
      <div className="container home">
        <div className="row">
          <div className="col">
            <img className="home-logo" src={LogoDark} alt="Litem Logo" />
            <h3>Free tools and guides for injured cyclists to exercise their rights</h3>
            <button className="btn btn-primary btn-lg" onClick={this.handleClick} name="quiz">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
