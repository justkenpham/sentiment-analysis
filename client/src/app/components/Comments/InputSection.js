import React, {useEffect, useState} from 'react';
import AnswerSection from "./AnswerSection";
import Sentiment from 'sentiment';

import logo from "../../assets/logo.svg";
import './InputSection.css'

export default function InputSection(){
  const sentiment = new Sentiment();
  const [phrase, setPhrase] = useState('');
  const [comment, setComment] = useState({name: "", date: ""})
  const [sentimentScore, setSentimentScore] = useState(null);

  useEffect(() => {
    setSentimentScore(sentiment.analyze(phrase));
  }, [phrase]);

  return (
    <div className="product-detail__comment">
      <div className="product-detail__comment__input">
        <img src={logo} />
        <input placeholder="Comment your thoughts..." value={phrase} onChange={e => setPhrase(e.target.value)}/>
        {sentimentScore !== null?
            sentimentScore.score <= 0 ?
            <p>Score: 0</p>
            :
            sentimentScore.score > 5 ?
            <p>Score: 5</p>
            :
            <p>Score: {sentimentScore.score-0.5}</p>
            : ''
        }
      </div>
      <AnswerSection logo={logo} />
    </div>
  );

}


