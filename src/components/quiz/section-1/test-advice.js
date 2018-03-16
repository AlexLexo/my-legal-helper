import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import MockDataAdvice from '../../../stores/mock-data-advice.json';
import Advice from './advice';

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
      'oncomingAcrossPathAdvice',
      'oncomingOvertakingAdvice',
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
    return (
      <div>
        {this.adviceId.map((item, i) => {
          //console.log(`${i} ${this.adviceId[i]}`);
          return (
            <div key={`${i} div`}>
              <h3 key={`${i} h1`}>
                {i}) {this.adviceId[i]} : {MockDataAdvice[i].details}
              </h3>
              <Advice
                key={`${i} advice`}
                allQs={MockDataAdvice[i]}
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
