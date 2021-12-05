import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import { getReviewFromBE, postReviewToBE } from '../../utils/review.utils';

import "./AnswerSection.css";

const AnswerSection = props => {
  const {product_id} = props;
  console.log(product_id);
  const [productId, setProductId] = useState(42);
  const [review, setReview] = useState([{ name: "", review: "", date: "", score: "" }]);

  useEffect(() => {
    getReviewFromBE(productId).then(res => setReview(res))
    console.log("Inside useEffect", review)
}, [])


return (
  <section className='review'>
  {review ? (review.map((prod) => (
    <div className="product-detail__comment__answers">
      <div>
      <img src={logo}></img>
      <p>{prod.username}</p>
      </div>
      <p className="date">{"Created at " + prod.review_time}</p>
      <p className="score">{"Score: " + prod.overall}</p>
      <h4 style={{ fontWeight: "normal" }}>{prod.review_text}</h4>
    </div>
    ))) :null}
  </section>
)
}

export default AnswerSection;
