import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import MockData from '../../../stores/mock-data.json';
import Letter from './letter';
import Advice from './advice';

@inject('RootStore')
@observer
class Test extends Component {
  render() {
    return (
      <div className="container">
        {MockData.map((item, i) => {
          let arr = [];
          for (const key in item) {
            if (item[key].answered) arr.push(item[key].answered);
          }
          return (
            <div key={`${i} row`} className="row">
              <div key={`${i} col1`} className="col">
                {arr.map((item, i) => (
                  <span key={`${i} span`}>
                    {item}
                    <br />
                  </span>
                ))}
              </div>
              <div key={`${i} col2`} className="col">
                <Advice
                  key={`${i} advice`}
                  allQs={item}
                  q={this.props.RootStore.SessionStore.userObj.allQs[item.qIdAdvice.answered]}
                  history={this.props.history}
                  setSection={x => this.props.RootStore.UIStore.setCurrentSection(x)}
                />
              </div>
              <div key={`${i} col3`} className="col">
                <Letter
                  key={`${i} letter`}
                  history={this.props.history}
                  editedLetter={false}
                  allQs={item}
                  q={this.props.RootStore.SessionStore.userObj.allQs[item.qIdLetter.answered]}
                  callback={v => console.log('Letter callback')}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Test;
