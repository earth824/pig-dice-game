import React, { Fragment } from 'react';
import './App.css';

import Header from './components/Header';
import ScoreCard from './components/ScoreCard';
import DiceCard from './components/DiceCard';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <ScoreCard />
        <DiceCard />
        <ScoreCard />
      </div>
    </Fragment>
  );
}

export default App;
