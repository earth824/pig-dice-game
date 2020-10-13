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

  const roll = () => {
    const newDiceScore = Math.ceil(Math.random() * 6);
    setDiceScore(newDiceScore);
    if (newDiceScore === 1) {
      setCurrentPlayer(currentValue => currentValue === 0 ? 1 : 0);
      setRoundScore(0);
    } else {
      setRoundScore(currentValue => currentValue + newDiceScore);
    }
  };

  const keep = () => {
    // const totolScore = roundScore + playerScore[currentPlayer];
    // const clonePlayerScore = [...playerScore];
    // clonePlayerScore[currentPlayer] = totolScore;
    // setPlayerScore(clonePlayerScore)

    const newScore = playerScore.map((score, idx) =>
      idx === currentPlayer ? score + roundScore : score)

    setPlayerScore(currentValue =>
      currentValue.map((ele, idx) =>
        idx === currentPlayer ? ele + roundScore : ele))
    setCurrentPlayer(currentValue => currentValue === 0 ? 1 : 0);
    setRoundScore(0);
  };

  const reset = () => {
    setPlayerScore([0, 0]);
    setRoundScore(0);
    setDiceScore(1);
    setCurrentPlayer(0);
  };

  return (
    <Fragment>
      <Header reset={reset} />
      <div className="container">
        <ScoreCard
          name="1"
          score={playerScore[0]}
          active={currentPlayer === 0 ? true : false} />
        <DiceCard
          diceScore={diceScore}
          roundScore={roundScore}
          roll={roll}
          keep={keep} />
        <ScoreCard
          name="2"
          score={playerScore[1]}
          active={currentPlayer === 1 ? true : false} />
      </div>
    </Fragment>
  );
}

export default App;
