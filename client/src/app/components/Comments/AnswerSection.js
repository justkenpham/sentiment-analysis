import React from "react";

import "./AnswerSection.css";
const AnswerSection = (props) => {
  return (
    <div className="product-detail__comment__answers">
      <div>
        <img src={props.logo} />
        <p>KENPHAM</p>
      </div>
      <h4 style={{ fontWeight: "normal" }}>This product is like shit!</h4>
    </div>
  );
};

export default AnswerSection;
