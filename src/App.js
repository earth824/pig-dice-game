import React, { Fragment, useState } from 'react';
import './App.css';

import Header from './components/Header';
import ScoreCard from './components/ScoreCard';
import DiceCard from './components/DiceCard';

function App() {
  const [playerScore, setPlayerScore] = useState([0, 0]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [diceScore, setDiceScore] = useState(1);
  const [roundScore, setRoundScore] = useState(0);

  const reset = () => {
    setPlayerScore([0, 0]);
    setCurrentPlayer(0);
    setDiceScore(1);
    setRoundScore(0);
  };

  const roll = () => {
    const newDiceScore = Math.ceil(Math.random() * 6);
    setDiceScore(newDiceScore);
    if (newDiceScore === 1) {
      setRoundScore(0);
      setCurrentPlayer(cur => cur === 0 ? 1 : 0);
    } else {
      setRoundScore(value => value + newDiceScore);
    }
  };

  const keep = () => {
    setRoundScore(0);
    setCurrentPlayer(cur => cur === 0 ? 1 : 0);
    setPlayerScore(value => value.map((ele, idx) => idx === currentPlayer ? ele + roundScore : ele));
  };

  return (
    <Fragment>
      <Header reset={reset} />
      <div className="container">
        <ScoreCard
          score={playerScore[0]}
          name="1"
          isCurrent={currentPlayer === 0 ? true : false} />
        <DiceCard
          diceScore={diceScore}
          roundScore={roundScore}
          roll={roll}
          keep={keep} />
        <ScoreCard
          score={playerScore[1]}
          name="2"
          isCurrent={currentPlayer === 1 ? true : false} />
      </div>
    </Fragment>
  );
}

export default App;
