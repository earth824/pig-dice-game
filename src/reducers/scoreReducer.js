export const initialState = {
  playerScore: [0, 0],
  currentPlayer: 0,
  diceScore: 1,
  roundScore: 0
};

export default (state, action) => {
  switch (action.type) {
    case 'ROLL':
      const { newDiceScore } = action.payload;
      if (newDiceScore === 1) {
        return {
          ...state,
          roundScore: 0,
          diceScore: newDiceScore,
          currentPlayer: state.currentPlayer === 0 ? 1 : 0
        };
      }
      return {
        ...state,
        diceScore: newDiceScore,
        roundScore: state.roundScore + newDiceScore
      };
    case 'KEEP':
      return {
        ...state,
        roundScore: 0,
        currentPlayer: state.currentPlayer === 0 ? 1 : 0,
        playerScore: state.playerScore.map((score, index) =>
          index === state.currentPlayer ? score + state.roundScore : score)
      }
    case 'RESET':
      return initialState;
    default: return state;
  }
};