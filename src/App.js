import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './index.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
