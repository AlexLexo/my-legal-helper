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
        <h1> Home </h1>
        <h3>There is no place like home</h3>
        <br />
        <p>But shouldn't you be exploring the rest of the app?</p>
      </div>
    );
  }
}

export default Home;
