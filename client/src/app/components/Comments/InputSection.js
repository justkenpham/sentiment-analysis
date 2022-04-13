import React from "react";
import AnswerSection from "./AnswerSection";

import logo from "../../assets/logo.svg";
import './InputSection.css'

const InputSection = (props) => {
  return (
    <div className="product-detail__comment">
      <div className="product-detail__comment__input">
        <img src={logo} />
        <input placeholder="Comment your thoughts..." />
      </div>
      <AnswerSection logo={logo} />
    </div>
  );
};

export default InputSection;
