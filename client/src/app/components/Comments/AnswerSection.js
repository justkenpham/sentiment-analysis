import React from "react";

import "./AnswerSection.css";
const AnswerSection = (props) => {
  return (
    <div className="product-detail__comment__answers">
        <div>
          <img src={props.logo} alt="" />
          <p>KENPHAM</p>
        </div>
        <p className="date">Created at 14:15 Monday 13rd, 2021</p>
        <h4 style={{ fontWeight: "normal" }}>This product is like shit!</h4>
      </div>
  );
};

export default AnswerSection;
