import React, { useEffect, useState } from 'react';
import "./product-detail.css";
import logo from "../../assets/logo.svg";
import fb from "../../assets/fb.png"
import tw from "../../assets/tw.png";
import InputSection from "../../components/Comments/InputSection";
import Rating from "../../components/Rating/rating";
import { getReviewFromBE, postReviewToBE } from '../../utils/review.utils';
import { getProductDetail } from "../../utils/product.utils";
//
const postData = {
  review_text: "This product is awesome",
  review_time: "2014-01-01 13:00:00",
  overall: "5.0",
  user_id: "7",
  product_id: 11

}



export default function ProductDetail(props) {
  const PathName = window.location.href;
  console.log("history", props.history)
  //State
  const history_product_id = (props.history.location.state.product_id) ? (props.history.location.state.product_id) : 11;
  const [productId, setProductId] = useState(history_product_id);
  const [product, setProduct] = useState({ name: "", image: "", id: "", category: "", price: "", description: "", rating: "", numReviews: "", link: "" });

  //useEffect
  useEffect(() => {
    const productDetail = getProductDetail(productId).then(
      (resolve) => {
        changeProduct(resolve)
      }
    );
    console.log("Inside useEffect", productDetail)

  }

    , []);


  //
  const changeProduct = (productDetail) => {
    console.log(" Inside change Product ", productDetail)
    const { product_id, product_name, description, price, image, rating, category_id } = productDetail[0]
    setProduct({
      name: product_name,
      image: image,
      id: product_id,
      category: category_id,
      price: price,
      description: description,
      rating: rating,
      numReviews: "1",
      link: "google.com"
    });
  }

  return (
    <div class="product-detail">
      <div class="mainpage">
        <div class="product_image">
          <img src={product.image} alt="" />
        </div>
        <div class="product_rightSide">
          <p class="block_model">
            <span class="block_model__text">ID: </span>
            <span class="block_model__number">{product.id}</span>
          </p>
          <div class="block_product">
            <h2 class="block_name block_name__addName">{product.name}</h2>
            <p class="block_product__advantagesProduct">{product.category}</p>
            <div class="block_price">
              <p class="block_price__currency">{"$" + product.price}</p>
              <p class="block_price__shipping">Shipping and taxes extra</p>
            </div>
            <div class="block_descriptionInformation">
              <span>{product.description}
              </span>
            </div>
            <div class="block_rating">
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}>
              </Rating>
            </div>
            <div class="button">
              <button class="button button_addToCard"><a href={"https:/" + product.link}>Buy Now</a>
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
    </div>
  );
};
