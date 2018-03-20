import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Container, Row, Col } from 'reactstrap';
import MockData from '../../../stores/mock-data.json';
import Letter from './letter';
import Advice from './advice';

@inject('RootStore')
@observer
class Test extends Component {
  render() {
    return (
      <Container>
        {MockData.map((item, i) => {
          let arr = [];
          for (const key in item) {
            if (item[key].answered) arr.push(item[key].answered);
          }
          return (
            <Row key={`${i} row`}>
              <Col key={`${i} col1`}>
                {arr.map((item, i) => (
                  <span key={`${i} span`}>
                    {item}
                    <br />
                  </span>
                ))}
              </Col>
              <Col key={`${i} col2`}>
                <Advice
                  key={`${i} advice`}
                  allQs={item}
                  q={this.props.RootStore.SessionStore.userObj.allQs[item.qIdAdvice.answered]}
                  history={this.props.history}
                  setSection={x => this.props.RootStore.UIStore.setCurrentSection(x)}
                />
              </Col>
              <Col key={`${i} col3`}>
                <Letter
                  key={`${i} letter`}
                  history={this.props.history}
                  editedLetter={false}
                  allQs={item}
                  q={this.props.RootStore.SessionStore.userObj.allQs[item.qIdLetter.answered]}
                  callback={v => console.log('Letter callback')}
                />
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }
}

export default Test;
