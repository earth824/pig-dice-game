import React, { useContext } from 'react';
import ScoreContext from '../context/ScoreContext';

function Header() {
  const { dispatch } = useContext(ScoreContext);
  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div className="header">
      <button className="btn" onClick={reset}>New Game</button>
    </div>
  );
}

export default Header;