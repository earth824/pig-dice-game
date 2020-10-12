export const initialState = {
  playerScore: [0, 0],
  currentScore: 0,
  currentPlayer: 0,
  diceScore: 1,
  roundScore: 0
};

export default (state, action) => {
  switch (action.type) {
    case 'RESET':
      return initialState;
    case 'ROLL_DICE':
      return {
        ...state,
        diceScore: action.payload
      }
    default:
      return state;
  }
};