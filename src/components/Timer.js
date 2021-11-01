import React from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>You can take a break!</span>;

const Timer = () => {
  return (
    <div>
      <h1>This is the Timer</h1>

      <button>Start Timer</button>
      <Countdown date={Date.now() + 500000}>
        <Completionist />
      </Countdown>
    </div>
  );
};

export default Timer;
