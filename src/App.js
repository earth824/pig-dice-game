import React, { Fragment, useReducer, useState } from 'react';
import './App.css';

import Header from './components/Header';
import ScoreCard from './components/ScoreCard';
import DiceCard from './components/DiceCard';
import ScoreContext from './context/ScoreContext';
import scoreReducer, { initialState } from './reducers/scoreReducer';

function App() {
  const [state, dispatch] = useReducer(scoreReducer, initialState) // [state, dispatch]
  const { playerScore, currentPlayer } = state;
  return (
    <Fragment>
      <ScoreContext.Provider value={{ state, dispatch }}>
        <Header />
        <div className="container">
          <ScoreCard
            name="1"
            score={playerScore[0]}
            active={currentPlayer === 0} />
          <DiceCard />
          <ScoreCard
            name="2"
            score={playerScore[1]}
            active={currentPlayer === 1} />
        </div>
      </ScoreContext.Provider>
    </Fragment >
  );
}

export default App;
