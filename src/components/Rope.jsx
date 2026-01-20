import React, { useContext } from "react";
import { UserContext } from "./UseProvider";
import rope from "../assets/People doing tug of war (1).mp4";

function Rope() {
  const { ropePosition } = useContext(UserContext);

  return (
    <div
      className="rope-container"
    >
      <video
        src={rope}
        autoPlay
        muted
        loop
        className="rope-video"
        style={{
          transition: "transform 0.3s ease",
          transform: `translateX(${ropePosition}%) translateY(-20px)`,
        //   transform: `translateY(-20px)`,
        }}
      ></video>
    </div>
  );
}

export default Rope;
