import React, { createContext, useReducer } from "react";
import generateQuestion from "./generateQuestion";

export const UserContext = createContext();

const initialState = {
  ropePosition: 0,
  score: {
    left: 0,
    right: 0,
  },
  round: 1,
  timeLeft: 10,
  questions: {
    left: generateQuestion(),
    right: generateQuestion(),
  },
  gameOver: false,
  winner: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "check":
      const newScore = {
        ...state.score,
        [action.side]: state.score[action.side] + 1,
      };
      const winner = Math.abs(newScore.left - newScore.right);
      const isGameOver = winner >= 5;
      return {
        ...state,
        score: newScore,

        ropePosition:
          action.side === "left"
            ? state.ropePosition - 5
            : state.ropePosition + 5,
        questions: {
          left: generateQuestion(),
          right: generateQuestion(),
        },
        timeLeft: 10,
        round: state.round + 1,
        gameOver: isGameOver,
        winner: isGameOver
          ? newScore.left > newScore.right
            ? "left"
            : "right"
          : "",
      };

    case "tick":
      return {
        ...state,
        timeLeft: state.timeLeft - 1 ,
      };

    case "restart":
      return {
        ...state,
        gameOver: false,
        winnier: null,
        ropePosition: 0,
        score: {
          left: 0,
          right: 0,
        },
        round: 1,
        timeLeft: 10,
        questions: {
          left: generateQuestion(),
          right: generateQuestion(),
        },
      };
    case "time_up":
      return {
        ...state,
        questions: {
          left: generateQuestion(),
          right: generateQuestion(),
        },
        timeLeft: 10,
        round: state.round + 1,
      };

    default:
      return state;
  }
}

function UseProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UseProvider;
