import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import MockDataLetter from '../../../stores/mock-data-letter.json';
import Letter from './letter';

@inject('RootStore')
@observer
class Test extends Component {
  constructor(props) {
    super(props);
    this.LetterId = [
      'injuredByAnimalLetter',
      'injuredByAnimalLetter',
      'injuredByAnimalLetter',
      'injuredByAnimalLetter',
      'injuredByAnimalLetter',
      'injuredByAnimalLetter',
      'roadDefectLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'injuredByPedestrianLetter',
      'rearEndedByLetter',
      'rearEndedByLetter',
      'rearEndedByLetter',
      'rearEndedByLetter',
      'vTurned1RChangingLanesLetter',
      'vTurned1RChangingLanesLetter',
      'vTurned1RChangingLanesLetter',
      'vTurned1RChangingLanesLetter',
      'vTurned1LChangingLanesLetter',
      'vTurned1LChangingLanesLetter',
      'vTurned1LChangingLanesLetter',
      'vTurned1LChangingLanesLetter',
      'vDirDetsSameQTurnIntoYouRLetter',
      'vDirDetsSameQTurnIntoYouRLetter',
      'vDirDetsSameQTurnIntoYouRLetter',
      'vDirDetsSameQTurnIntoYouRLetter',
      'vDirDetsSameQTurnIntoYouLLetter',
      'vDirDetsSameQTurnIntoYouLLetter',
      'vDirDetsSameQTurnIntoYouLLetter',
      'vDirDetsSameQTurnIntoYouLLetter',
      'oncomingOvertakingLetter',
      'oncomingOvertakingLetter',
      'oncomingOvertakingLetter',
      'oncomingOvertakingLetter',
      'oncomingAcrossPathLetter',
      'oncomingAcrossPathLetter',
      'oncomingAcrossPathLetter',
      'oncomingAcrossPathLetter',
      'vTurned2ParkingLetter',
      'vTurned2ParkingLetter',
      'vTurned2ParkingLetter',
      'vTurned2ParkingLetter',
      'vTurned2SideRoadLetter',
      'vTurned2SideRoadLetter',
      'vTurned2SideRoadLetter',
      'vTurned2SideRoadLetter',
      'roundaboutLLetter',
      'roundaboutLLetter',
      'roundaboutLLetter',
      'roundaboutLLetter',
      'iDets1HitAsPassedLetter',
      'iDets1HitAsPassedLetter',
      'iDets1HitAsPassedLetter',
      'iDets1HitAsPassedLetter'
    ];
  }

  render() {
    return (
      <div>
        {this.LetterId.map((item, i) => {
          //console.log(`${i} ${this.LetterId[i]}`);
          //console.log(`${i} ${MockDataLetter[i].details}`);
          return (
            <div key={`${i} div`}>
              <h3 key={`${i} h1`}>
                {i}) {this.LetterId[i]} : {MockDataLetter[i].details}
              </h3>
              <Letter
                history={this.props.history}
                editedLetter={false}
                allQs={MockDataLetter[i]}
                q={this.props.RootStore.SessionStore.userObj.allQs[this.LetterId[i]]}
                callback={v => console.log('Letter callback')}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Test;
