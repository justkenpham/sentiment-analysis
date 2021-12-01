// src/app/pages/productdetail/index.js

import React from "react";
import "./index.css";
import logo from "../../assets/logo.svg";

import star from '../../assets/icon/star.png';
import starFull from '../../assets/icon/star-full.png';
import InputSection from "../../components/Comments/InputSection";
import { exampleProduct } from "../../constants/Product";

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
              <h3>{exampleProduct.productName}</h3>
              <h1>{exampleProduct.productPrice}</h1>
            </div>
            <div className="product-detail__body__content__general__sentiment">
              <h1>{exampleProduct.productScore}</h1>
              <img src={exampleProduct.productRating}/>
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
