import React, { useContext } from "react";
import TeamPanel from "./components/TeamPanel";
import Timer from "./components/Timer";
import Rope from "./components/Rope";
import "./App.css";
import { UserContext } from "./components/UseProvider";

function App() {
  const { gameOver, winner, round, dispatch, score } = useContext(UserContext);

  return (
    <div className="container">
      {gameOver ? (
        <div className="winner-screen">
          <div className="winner-inner">
            <div className="winner-icon">🏆</div>
            <h1 className="winner-title">
              WINNER IS {winner.toUpperCase()} TEAM!
            </h1>
            <div className="winner-score">WITH {score[winner]} POINTS</div>
            <p className="winner-rounds">Rounds played: {round - 1}</p>
            <button
              className="restart-btn"
              onClick={() => dispatch({ type: "restart" })}
            >
              Restart Game
            </button>
          </div>
        </div>
      ) : (
        <div className="inner">
          <div className="game-header">
            <h1>ROUND {round}</h1>
          </div>
          <div className="app">
            <TeamPanel command="left" color="blue" />
            <div>
              <Timer />
              <Rope />
            </div>
            <div className="straight-line"></div>
            <TeamPanel command="right" color="red" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
