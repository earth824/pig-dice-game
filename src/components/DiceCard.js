import React from 'react';

function DiceCard() {
  return (
    <div className="card">
      <div className="row">
        <button className="btn btn-danger btn-fw">Roll</button>
        <button className="btn btn-success btn-fw">Keep</button>
      </div>
      <div className="row">
        <div className="dice-score"></div>
      </div>
      <div className="row">
        <p className="round-score">Round Score : </p>
      </div>
    </div>
  );
}

export default DiceCard;