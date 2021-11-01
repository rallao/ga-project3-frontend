import React from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>You finish</span>;

const Timer = () => {
  return (
    <div>
      <h1>This is the Pomodoro Timer</h1>

      <button>Start Timer</button>
      <Countdown date={Date.now() + 1500000}>
        <Completionist />
      </Countdown>
    </div>
  );
};

export default Timer;
