import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../App.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <hr />
        <div className="planets">
          {
            planets.map((planet, index) => (
              <div key={ index } className={ `planet-${index}` }>
                <PlanetCard
                  key={ index }
                  planetName={ planet.name }
                  planetImage={ planet.image }
                />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
