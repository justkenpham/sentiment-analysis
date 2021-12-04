import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg'

import "./AnswerSection.css";


export default function AnswerSection() {
  const [comment, setComment] = useState({ name: "", date: "", rating: "", comment: "" });
  useEffect(() => {
    setComment({
      name: "KENPHAM",
      date: "14:15 12/13/2021",
      rating: "3",
      comment: "This product is like shit!"
    });
  }, []);

  return (
    <div className="product-detail__comment__answers">
      <div>
        <img src={logo} alt="" />
        <p>{comment.name}</p>
      </div>
      <p className="date">{"Created at" + comment.date}</p>
      <p className="score">{"Score: " + comment.rating}</p>
      <h4 style={{ fontWeight: "normal" }}>{comment.comment}</h4>
    </div>
  );
};
