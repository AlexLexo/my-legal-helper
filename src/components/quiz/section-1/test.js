import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import MockData from '../../../stores/mock-data.json';
import Advice from './advice';
//import Letter from './letter';

@inject('RootStore')
@observer
class Test extends Component {
  constructor(props) {
    super(props);
    this.adviceId = [
      'animal',
      'animal',
      'animal',
      'animal',
      'animal',
      'animal',
      'crossingNotPermitted',
      'crossingNotPermitted',
      'crossingOffRoad',
      'crossingOffRoad',
      'dooredPassenger',
      'dooredDriver',
      'green',
      'green',
      'roundaboutL',
      'roundaboutL',
      'roundaboutL',
      'roundaboutL',
      'offPavement',
      'offPavement',
      'offPavement',
      'offPavement',
      'offPavement',
      'offPavement',
      'fromBehindObj',
      'fromBehindObj',
      'fromBehindObj',
      'fromBehindObj',
      'fromBehindObj',
      'fromBehindObj',
      'oncomingAcrossPathAdvice',
      'oncomingAcrossPathAdvice',
      'oncomingAcrossPathAdvice',
      'oncomingOvertakingAdvice',
      'oncomingOvertakingAdvice',
      'oncomingOvertakingAdvice',
      'pedRanInto',
      'pedRanInto',
      'rearEndedBy',
      'rearEndedBy',
      'rearEndedBy',
      'rearEndedBy',
      'iDets1HitAsPassedAdvice',
      'iDets1HitAsPassedAdvice',
      'iDets1HitAsPassedAdvice',
      'iDets1HitAsPassedAdvice',
      'redAmber',
      'redAmber',
      'roadDefect',
      'vTurned2SideRoadAdvice',
      'vTurned2SideRoadAdvice',
      'vTurned2SideRoadAdvice',
      'vTurned2SideRoadAdvice',
      'vTurned2ParkingAdvice',
      'vTurned2ParkingAdvice',
      'vTurned2ParkingAdvice',
      'vTurned2ParkingAdvice',
      'vTurned1ChangingLanesAdvice',
      'vTurned1ChangingLanesAdvice',
      'vTurned1ChangingLanesAdvice',
      'vTurned1ChangingLanesAdvice',
      'vTurned1ChangingLanesAdvice',
      'vTurned1ChangingLanesAdvice',
      'vTurned1ChangingLanesAdvice',
      'vTurned1ChangingLanesAdvice',
      'vDirDetsSameQTurnIntoYouRAdvice',
      'vDirDetsSameQTurnIntoYouRAdvice',
      'vDirDetsSameQTurnIntoYouRAdvice',
      'vDirDetsSameQTurnIntoYouRAdvice',
      'vDirDetsSameQTurnIntoYouLAdvice',
      'vDirDetsSameQTurnIntoYouLAdvice',
      'vDirDetsSameQTurnIntoYouLAdvice',
      'vDirDetsSameQTurnIntoYouLAdvice'
    ];
  }

  render() {
    /*<Letter
            history={this.props.history}
            editedLetter={this.state.editedLetter}
            callback={v =>
              this.setState({
                value: v,
                nxtQId: this.qId
              })
            }
          />*/
    return (
      <div>
        {this.adviceId.map((item, i) => {
          return (
            <div key={`${i} ${this.adviceId[i]} div`}>
              <h3 key={`${i} ${this.adviceId[i]} h1`}>
                {i}) {this.adviceId[i]} : {MockData[i].details}
              </h3>
              <Advice
                key={`${i} ${this.adviceId[i]} advice`}
                allQs={MockData[i]}
                q={this.props.RootStore.SessionStore.userObj.allQs[this.adviceId[i]]}
                history={this.props.history}
                setSection={x => this.props.RootStore.UIStore.setCurrentSection(x)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Test;
