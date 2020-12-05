import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here

  const [time, setTime] = React.useState(0);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (isNaN(event.target.value)) {
        setTime(0);
        return;
      }
      setTime(Math.floor(event.target.value));
    }
  };

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleKeyDown} /> sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  );
};

export default App;
