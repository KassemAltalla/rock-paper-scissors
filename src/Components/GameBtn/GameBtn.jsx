import React from "react";

import "./GameBtn.css";

function GameBtn({ img, color, onClick }) {
  return (
    <div
      className="gameBtn"
      style={{ borderColor: `${color}` }}
      onClick={onClick}
    >
      <img src={img} alt="" />
    </div>
  );
}

export default GameBtn;
