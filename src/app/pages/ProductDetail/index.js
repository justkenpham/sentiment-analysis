import React from "react";
import "./index.css";
import logo from "../../assets/logo.svg";

import star from '../../assets/icon/star.png';
import starFull from '../../assets/icon/star-full.png';
import InputSection from "../../components/Comments/InputSection";

const ProductDetail = (props) => {
  return (
    <div className="product-detail">
      <div className="product-detail__body">
        <div className="product-detail__body__img">
          <img src={logo} />
        </div>
        <div className="product-detail__body__content">
          <div className="product-detail__body__content__general">
            <div className="product-detail__body__content__general__main">
              <h3>Hà Tiến Đạt</h3>
              <h1>$999</h1>
            </div>
            <div className="product-detail__body__content__general__sentiment">
              <h1>BAD</h1>
              <img src={starFull} />
              <img src={starFull} />
              <img src={starFull} />
              <img src={star} />
              <img src={star} />
            </div>
          </div>
          <div className="product-detail__body__content__cta">
            <div>Add to cart</div>
            <div>Buy now!</div>
          </div>
          <div className="product-detail__body__content__description">
            <p>
              Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem
              ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum
              Lorem ispum{" "}
            </p>
          </div>
        </div>
      </div>
      <InputSection/>
    </div>
  );
};

export default ProductDetail;
