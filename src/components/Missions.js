import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../App.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions">
          {
            missions.map((mission, index) => (
              <div key={ index } className={ `mission-${index}` }>
                <MissionCard
                  key={ index }
                  name={ mission.name }
                  year={ mission.year }
                  country={ mission.country }
                  destination={ mission.destination }
                />
              </div>
            ))
          }

        </div>
      </div>
    );
  }
}

export default Missions;
