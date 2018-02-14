import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './results.css';

@inject('UIStore', 'SessionStore', 'C1Store', 'C2Store')
@observer
class Results extends Component {
  componentWillMount() {
    this.props.UIStore.handleFadeIn();
  }
  store = this.props.C2Store.currentQ.q
    ? this.props.C2Store
    : this.props.C1Store;
  render() {
    if (this.store.currentQ.q === undefined) {
      return <div>Loading...</div>;
    } else {
      const results = this.store.courseData.slice(0, 10).map((item, i) => (
        <div
          className={item.lastAnsd === 'w' ? 'incorrect' : 'correct'}
          key={i}
        >
          <h3>{this.store.courseQs[item.qId].q}</h3>
          <h4>You got it {item.lastAnsd === 'w' ? 'wrong' : 'right'}!</h4>
        </div>
      ));
      return (
        <div>
          <h1>Results</h1>
          <h3>The jury is in!</h3>
          {results}
        </div>
      );
    }
  }
}

export default Results;
