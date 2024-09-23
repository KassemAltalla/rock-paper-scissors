import React from "react";
import "./Rules.css";
import rule from "../../images/image-rules.svg";

const Rules = ({ dis }) => {
  return (
    <div className="Rules" style={{ display: dis ? "" : "none" }}>
      <div className="rulesCart">
        <h2>Rules</h2>
        <img src={rule} alt="" />
      </div>
    </div>
  );
};

export default Rules;
