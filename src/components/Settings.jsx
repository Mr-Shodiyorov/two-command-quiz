import React, { useContext, useState } from "react";
import { UserContext } from "./UseProvider";

function Settings({ isOpen, closeModal }) {
  let { maxRound, dispatch } = useContext(UserContext);
  let [maxRoundInp, setMaxRoundInp] = useState(maxRound);

  if (!isOpen) return null;

  function handleSettingSubmit(e) {
    e.preventDefault();
    if (maxRoundInp !== "" && maxRoundInp !== 0) {
      dispatch({ type: "setRound", payload: Number(maxRoundInp) });
      dispatch({ type: "restart" });
      closeModal();
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">GAME SETTINGS</h2>
        <form onSubmit={handleSettingSubmit} className="form-item">
          <div className="setting-group">
            <label>Winning Rounds:</label>
            <input
              className="answer-inp"
              style={{ border: "1px solid #ccc", width: "100%", marginTop: "10px" }}
              value={maxRoundInp}
              type="number"
              onChange={(e) => setMaxRoundInp(e.target.value)}
            />
          </div>
          <div className="modal-actions">
            <button type="submit" className="restart-btn" style={{ padding: "12px 25px" }}>
              Save & Restart
            </button>
            <button type="button" onClick={closeModal} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;