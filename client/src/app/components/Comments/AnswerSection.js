import React, { useEffect, useState } from 'react';
import avatar from '../../assets/profile.png';
import negative from '../../assets/angry.png';
import normal from '../../assets/normal.png';
import positive from '../../assets/happy.png';
import { getReviewFromBE, postReviewToBE } from '../../utils/review.utils';

import "./AnswerSection.css";

const AnswerSection = props => {
  console.log("Answer", props.product_id);
  const [productId, setProductId] = useState(props.product_id);
  const [review, setReview] = useState([{ name: "", review: "", date: "", score: "" }]);
  console.log("new Comment co cl j", props.newComment)
  useEffect(() => {
    getReviewFromBE(productId).then(res => setReview(res))
    console.log("Inside useEffect", review)
  }, [])
  useEffect(() => {
    setReview(prevState => [...prevState, props.newComment])
  }, [props.newComment])
  const displayDate = (reviewTime) => {
    if (reviewTime === undefined) return
    const displayDate = reviewTime.slice(0, 10)
    const displayTime = reviewTime.slice(11, reviewTime.length - 5)
    return displayDate + " " + displayTime
  }

  return (
    <div className='commentcontainer'>
      <div className='commentlist'>
        {review ? (review.map((prod) => (
          <div className="commentprod">
            <div class="commentavatar">
              {
                prod.overall ?
                  prod.overall > 3.9 ?
                    <img src={positive} alt="normal" />
                    :
                    prod.overall > 2.5 ?
                      <img src={normal} alt="positive" />
                      :
                      <img src={negative} alt="negative" />
                  : <img src={negative} alt="negative" />
              }
            </div>
            <div class="commentbox">
              <div class="commenthead">
                <p class="commentname">{prod.username}</p>
                <span>{displayDate(prod.review_time)}</span>
                {/* <p className="commentscore">{"Score: " + prod.overall}</p> */}
              </div>
              <div class="commentcontent">
                {prod.review_text}
              </div>
            </div>
          </div>
        ))) : null}
      </div>
    </div>
  )
}

export default AnswerSection;

