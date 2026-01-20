import React, { useContext, useState } from "react";
import { UserContext } from "./UseProvider";

function TeamPanel({ command, color }) {
  const { questions, score, dispatch } = useContext(UserContext);
  let [inpValue, setInpValue] = useState("");
  let [corr, setCorr] = useState("");
  let [isTrue, setIsTrue] = useState("");
  const currentQuestion = questions[command];

  function handleInput(e) {
    e.preventDefault();
    const answer = Number(inpValue);

    if (answer === currentQuestion?.answer) {
      setCorr("correct");
      setIsTrue("");
      dispatch({ type: "check", side: command });
      setInpValue("");

      setTimeout(() => {
        setCorr("");
      }, 800);
    } else {
      setCorr("wrong");
      setIsTrue("wrong");
      setInpValue("");

      setTimeout(() => {
        setIsTrue("");
      }, 500);
      setTimeout(() => {
        setCorr("");
      }, 800);
    }
  }

  return (
    <div
      className="item-box"
      style={{
        backgroundColor: `${color === "blue" ? "#2f7ac5" : "#d93939"}`,
      }}
    >
      <h2 className="item-title">{command.toUpperCase()} TEAM</h2>
      <div className="math-section">
        <h3 className="question-item">{currentQuestion?.text} = ?</h3>
        <form className="form-item" onSubmit={handleInput}>
          <input
            value={inpValue}
            type="number"
            onChange={(e) => setInpValue(e.target.value)}
            className={`answer-inp ${isTrue == "wrong" ? "wrong" : ""}`}
            placeholder="?"
          />
          <button className="answer-btn">Answer</button>
        </form>
      </div>
      <div>
        <span className="correct-or-incorrect">{corr}</span>
      </div>
      <div className="score-badge">Points: {score[command]}</div>

      <div className="numpad">
        <button
          key="1"
          className="numpad-btn"
          type="button"
          onClick={() => {
            setInpValue((el) => el + 1);
          }}
        >
          1
        </button>
        <button
          key="2"
          className="numpad-btn"
          type="button"
          onClick={() => {
            setInpValue((el) => el + 2);
          }}
        >
          2
        </button>
        <button
          key="3"
          className="numpad-btn"
          type="button"
          onClick={() => {
            setInpValue((el) => el + 3);
          }}
        >
          3
        </button>
        <button
          key="4"
          className="numpad-btn"
          type="button"
          onClick={() => {
            setInpValue((el) => el + 4);
          }}
        >
          4
        </button>
        <button
          key="5"
          className="numpad-btn"
          type="button"
          onClick={() => {
            setInpValue((el) => el + 5);
          }}
        >
          5
        </button>
        <button
          key="6"
          className="numpad-btn"
          type="button"
          onClick={() => {
            setInpValue((el) => el + 6);
          }}
        >
          6
        </button>
        <button
          key="7"
          className="numpad-btn"
          type="button"
          onClick={() => {
            setInpValue((el) => el + 7);
          }}
        >
          7
        </button>
        <button
          key="8"
          className="numpad-btn"
          type="button"
          onClick={() => {
            setInpValue((el) => el + 8);
          }}
        >
          8
        </button>
        <button
          key="9"
          className="numpad-btn"
          type="button"
          onClick={() => {
            setInpValue((el) => el + 9);
          }}
        >
          9
        </button>
        <button
          key="0"
          className="numpad-btn"
          type="button"
          onClick={() => {
            setInpValue((el) => el + 0);
          }}
        >
          0
        </button>
        <button
          key="c"
          className="numpad-btn"
          type="button"
          onClick={() => {
            setInpValue("");
          }}
        >
          C
        </button>
      </div>
    </div>
  );
}

export default TeamPanel;
