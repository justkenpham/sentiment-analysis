import React from "react";
import "./product-detail.css";
import logo from "../../assets/logo.svg";
import fb from "../../assets/fb.png"
import tw from "../../assets/tw.png"
import star from '../../assets/icon/star.png';
import starFull from '../../assets/icon/star-full.png';
import InputSection from "../../components/Comments/InputSection";
import { getReviewFromBE, postReviewToBE } from "../../utils/review.utils";
import { getProductDetail, getAllProducts, searchProduct } from "../../utils/product.utils";
import { useEffect, useState } from "react";
import axios from 'axios';
const PathName = window.location.href;

const postData = {
  review_text: "This product is awesome",
  review_time: "2014-01-01 13:00:00",
  overall: "5.0",
  user_id: "7",
  product_id: 11

}

const getReviewRoute = "http://localhost:8080/reviews/get-reviews/"
const postReviewRoute = "http://localhost:8080/reviews/post-reviews/";
const getProductDetailRoute = "http://localhost:8080/products/search/"
const ProductDetail = (props) => {

  const [productId, setProductId] = useState(11);
  const [reviews, setReviews] = useState();
  const [currentReview, setCurrentReview] = useState()
  const [productDetail, setProductDetail] = useState()
  // const getReviewFromBE = async () => {
  //   const response = await axios.get(getReviewRoute + productId)
  //   console.log("response:", response)
  //   setReviews(response.data)
  // }

  // const postReviewToBE = async (review) => {
  //   const post = await axios.post(postReviewRoute, postData).then(res => console.log(res))
  //   console.log("post successfully")
  // }

  // const getProductDetail = async () => {
  //   const response = await axios.get(getProductDetailRoute + productId)
  //   console.log("response:", response)
  //   setReviews(response.data)
  // }
  useEffect(() => {
    const reviews = getReviewFromBE(productId);
    const productDetail = getProductDetail(productId);
    setReviews(reviews)
    setProductDetail(productDetail)

  }

    , []);

  return (
    <div class="product-detail">
      <div class="background"></div>
      <div class="mainpage">
        <div class="product_image">
          <img src={logo} alt="" />
        </div>
        <div class="product_rightSide">
          <p class="block_model">
            <span class="block_model__text">ID: </span>
            <span class="block_model__number">000001</span>
          </p>
          <div class="block_product">
            <h2 class="block_name block_name__addName">Product Name</h2>
            <p class="block_product__advantagesProduct">Category</p>
            <div class="block_price">
              <p class="block_price__currency">$999.99</p>
              <p class="block_price__shipping">Shipping and taxes extra</p>
            </div>
            <div class="block_descriptionInformation">
              <span>Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum{" "}
              </span>
            </div>
            <div class="block_rating">
              <img src={starFull} />
              <img src={starFull} />
              <img src={starFull} />
              <img src={star} />
              <img src={star} />
              <span class="block_rating__average">3.00</span>
              <span class="block_rating__reviews">
                <a href="#AnswerSection">(1 reviews)</a>
              </span>
            </div>
            <div class="button">
              <button class="button button_addToCard">Buy Now
              </button>
              <br></br>
              <span class="text">Like it? Share It!</span>
              <div class="share">
                <ul class="social-networks list-unstyled">
                  <li>
                    <img src={fb} alt="" />
                    <a href={"https://www.facebook.com/sharer?u=" + PathName} title="facebook"><i class="icon icon-facebook"></i>Facebook</a></li>
                  <li>
                    <img src={tw} alt="" />
                    <a href={"http://twitter.com/intent/tweet?text=My Product&url=" + PathName} title="Twitter"><i class="icon icon-twitter"></i>Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InputSection />
      <button onClick={() => postReviewToBE(postData)}>Comments</button>
    </div>
  );
};

export default ProductDetail;
