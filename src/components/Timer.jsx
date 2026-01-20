import { useContext, useEffect } from "react";
import { UserContext } from "./UseProvider";

function Timer() {
  const { timeLeft, dispatch } = useContext(UserContext);

  useEffect(() => {
    if (timeLeft === 0) {
      dispatch({ type: "time_up" });
      return;
    }

    const interval = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, dispatch]);

  return (
    <div className="timer-box" >
      <h2 className="timer-text">Time: {timeLeft}s</h2>
    </div>
  );
}

export default Timer;