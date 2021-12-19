import React from 'react';
import star from '../../assets/icon/star.png';
import starFull from '../../assets/icon/star-full.png';
import halfstar from '../../assets/icon/half-star.png'

import './rating.css'

export default function Rating(props) {
    const { rating, numReviews } = props;
    return(
        <div className="Rating">
        <span>
            {
                rating >= 1
                ? <img src={starFull} />
                : rating >= 0.5
                ? <img src={halfstar} />
                : <img src={star} />
            }
        </span>
        <span>
            {
                rating >= 2
                ? <img src={starFull} />
                : rating >= 1.5
                ? <img src={halfstar} />
                : <img src={star} />
            }
        </span>
        <span>
            {
                rating >= 3
                ? <img src={starFull} />
                : rating >= 2.5
                ? <img src={halfstar} />
                : <img src={star} />
            }
        </span>
        <span>
            {
                rating >= 4
                ? <img src={starFull} />
                : rating >= 3.5
                ? <img src={halfstar} />
                : <img src={star} />
            }
        </span>
        <span>
            {
                rating >= 5
                ? <img src={starFull} />
                : rating >= 4.5
                ? <img src={halfstar} />
                : <img src={star} />
            }
        </span>
        <span class="block_rating__average">{rating}</span>
        <span class="block_rating__reviews">
        {numReviews + ' reviews'}
        </span>
    </div>
    );
}