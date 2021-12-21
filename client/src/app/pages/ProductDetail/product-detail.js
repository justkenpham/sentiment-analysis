import React, { useEffect, useState, useContext } from 'react';
import "./product-detail.css";
import logo from "../../assets/logo.svg";
import fb from "../../assets/fb.png"
import tw from "../../assets/tw.png";
import InputSection from "../../components/Comments/InputSection";
import Rating from "../../components/Rating/rating";
import Footer from "./product-detail-footer"
import { getProductDetail } from "../../utils/product.utils";
import { useLocation, useHistory } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
//
import Header from '../../components/Header';
export default function ProductDetail(props) {
  const history = useHistory()
  const location = useLocation();
  const productid = location.state.product_id;
  const { login, setLogin } = useContext(UserContext)
  const userId = (login) ? (login.user_id) : (1)
  console.log("User id", userId)
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
    const { product_id, product_name, description, price, image, rating, category_id, category_name, numReviews } = productDetail[0]
    setProduct({
      name: product_name,
      image: image,
      id: product_id,
      category: category_name,
      price: price,
      description: description,
      rating: rating,
      numReview: numReviews,
      link: "https://www.google.com/search?tbm=shop&q="
    });
  }

  return (
    <div class="product-detail">
      <Header setProductList={e => history.push("/product-list")} />
      <div class="mainpage">
        <div class="product_image">
          <img src={product.image} alt="" max-width="100%" height="auto" />
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
                numReviews={product.numReview}>
              </Rating>
            </div>
            <div class="button">
              <button class="button button_addToCard"><a href={product.link + product.name}>Buy Now</a>
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
      <InputSection
        productid={productid}
        userID={userId}>
      </InputSection>
      <Footer />
    </div>
  );
};
