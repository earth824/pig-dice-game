import React from 'react';

function ScoreCard({ score, name, isCurrent }) {
  return (
    <div className={`card${isCurrent ? ' active' : ''}`}>
      <h1 className="player-name">PLAYER {name}</h1>
      <p className="player-score">{score}</p>
    </div>
  );
}

export default ScoreCard;