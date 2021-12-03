import React, { useEffect } from 'react';
import { exampleProduct } from '../../constants/Product';
// import { getAllProducts } from '../../services/Product';

import {allProducts} from '../../data/Product.js'

import "./index.css"

const ProductList = props => {
    

    const onViewProduct = () => {
        props.history.push("/product-detail")
    }

    // useEffect(() => getAllProducts(),[])

    return(
        <div className="pl-container">
            <div className="pl-filter">
                <p>Filter</p>
                <div className="pl-select">
                    <select title="Price">
                        <option>💵 Price</option>
                        <option>More than $10K</option>
                        <option>From $1K to $10K</option>
                        <option>Less than $1K</option>
                    </select>
                    <select title="Rating">
                        <option>🤔 Rating</option>
                        <option>😆 Good</option>
                        <option>🙂 Normal</option>
                        <option>😒 Bad</option>
                    </select>
                </div>
                <div className="pl-btn">    
                    <div className="pl-btn__login">Login</div>
                    <div className="pl-btn__signup">Signup</div>
                </div>
            </div>
            <section className="pl-list">
                {allProducts.map((prod) => (
                    <div className="pl-list__product" onClick={onViewProduct}>
                        <img src={prod.image} />
                        <div>
                            <div className="pl-list__product__name">
                                <p>{prod.product_name}</p>
                            </div>
                            <div className="pl-list__product__under-name">
                                <p className="pl-list__product__under-name__price">${prod.price}</p>
                                <p className="pl-list__product__under-name__rating">{prod.rating}</p>
                            </div>
                        </div>
                    </div>
                ) )}
            </section>
        </div>
    )
}

export default ProductList;