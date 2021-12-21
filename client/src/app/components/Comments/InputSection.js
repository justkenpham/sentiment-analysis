import React, { useEffect, useState, useContext } from 'react';
import AnswerSection from "./AnswerSection";
import Sentiment from 'sentiment';
import Popup from '../Popup/Popup';
import avatar from "../../assets/profile.png";
import negative from '../../assets/angry.png';
import normal from '../../assets/normal.png';
import positive from '../../assets/happy.png';
import { getReviewFromBE, postReviewToBE } from '../../utils/review.utils';
import './InputSection.css'
import { UserContext } from '../../context/UserContext';

export default function InputSection(props) {
  console.log("Input", props.productid);
  const { login, setLogin } = useContext(UserContext)
  const userID = (login) ? (login.user_id) : (null);
  const sentiment = new Sentiment();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoginRemindOpen, setIsLoginRemindOpen] = useState(false);
  const [review, setReview] = useState({ review_text: "", review_time: "", overall: "", user_id: "", product_id: "" });
  const [phrase, setPhrase] = useState('');
  const [sentimentScore, setSentimentScore] = useState(null);
  const [currentDate, setCurrentDate] = useState('');
  const [newComment, setNewComment] = useState('');
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      year + '-' + month + '-' + date
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);

  useEffect(() => {
    setSentimentScore(sentiment.analyze(phrase));
  }, [phrase]);

  const handleSentimentalScore = () => {

  }
  const Input = async (review) => {
    console.log(" Input function", review)
    const { review_text, review_time, overall, user_id, product_id } = review
    review["username"] = login.username
    setNewComment(review)
    const response = await postReviewToBE(review)
    console.log("Register response", response)
  }


  const submitHandler = (e) => {
    e.preventDefault();
    Input(review);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const toggleLoginRemindPopup = () => {
    setIsLoginRemindOpen(!isLoginRemindOpen);
  }
  const handleSubmitReview = (e) => {
    if (userID === null) {
      toggleLoginRemindPopup();
      return;
    }


    console.log("phrase length", phrase.length)
    if (phrase.length !== 0) {
      submitHandler(e); togglePopup();
      setPhrase('')
    }
    else alert("You have not commented")
  }

  return (
    <div className="product-detail__comment">
      <div className="product-detail__comment__input">
        {
          sentimentScore ?
            sentimentScore.score === 0 ?
              <img src={normal} alt="normal" />
              :
              sentimentScore.score > 0 ?
                <img src={positive} alt="positive" />
                :
                <img src={negative} alt="negative" />
            : ''
        }
        <input placeholder="Comment your thoughts..."
          // value={phrase} 
          onInput={e => setPhrase(e.target.value)} onChange={e => setReview({ ...review, review_text: e.target.value, review_time: currentDate, overall: ((sentimentScore.score / sentimentScore.words.length) / 6 * 5) + 2.5, user_id: userID, product_id: props.productid })} />
        <button className="submit" onClick={handleSubmitReview}>Submit</button>
        {isOpen && <Popup
          content={<>
            <b>Updated!</b>
            <p>Thank you for your review.</p>
          </>}
          handleClose={togglePopup}
        />}
        {isLoginRemindOpen && <Popup
          content={<>
            <b>Please login first to comment!</b>
            <p> Please <a href='/login'>login</a> or <a href='/register'>register</a> first</p>
          </>}
          handleClose={toggleLoginRemindPopup}
        />}
      </div>
      <AnswerSection
        product_id={props.productid}
        newComment={newComment}>

      </AnswerSection>
    </div>
  );

}


