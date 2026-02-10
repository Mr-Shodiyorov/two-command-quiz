import React, { useContext, useState } from "react";
import TeamPanel from "./components/TeamPanel";
import Timer from "./components/Timer";
import Rope from "./components/Rope";
import "./App.css";
import { UserContext } from "./components/UseProvider";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Settings from "./components/Settings";

function App() {
  const { gameOver, winner, round, dispatch, score , maxRound } = useContext(UserContext);
  const { width, height } = useWindowSize();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="main">
      <div className="container">
        {/* Settings Modal */}
        <Settings 
          isOpen={isSettingsOpen} 
          closeModal={() => setIsSettingsOpen(false)} 
        />

        {gameOver ? (
          <div className="winner-screen">
            <Confetti
              width={width}
              height={height}
              numberOfPieces={300}
              recycle={true}
              gravity={0.15}
            />

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
              <div className="header-center">
                <h1>TUG OF MATH</h1>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                <Timer />
                <button 
                  className="settings-open-btn" 
                  onClick={() => setIsSettingsOpen(true)}
                >
                  ⚙️
                </button>
              </div>
              <h1>ROUND {round}/{maxRound}</h1>
            </div>
            
            <div className="app">
              <TeamPanel command="left" color="blue" />
              <div>
                <Rope />
              </div>
              <div className="straight-line"></div>
              <TeamPanel command="right" color="red" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;