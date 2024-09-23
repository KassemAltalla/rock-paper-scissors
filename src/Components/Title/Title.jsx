import React, { useState, useEffect } from "react";
import "./Title.css";
import { useSelector } from "react-redux";

function Title() {
  const score = useSelector((state) => state.score);

  return (
    <div className="title">
      <div className="gameName">
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
      </div>
      <div className="Score">
        <p>Score</p>
        <p>{score.value}</p>
      </div>
    </div>
  );
}

export default Title;
