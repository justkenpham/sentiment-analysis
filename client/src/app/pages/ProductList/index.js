import React, { useEffect } from 'react';
import { exampleProduct } from '../../constants/Product';
import { getAllProducts } from '../../services/Product';

import "./index.css"

const ProductList = props => {
    let numberOfProducts = [1,2,3,4,5,6,7,8,9];

    const onViewProduct = () => {

    }

    useEffect(() => getAllProducts(),[])

    return(
        <div className="pl-container">
            <div className="pl-filter">
                <p>Filter</p>
                    <div>
                        <select title="Price">
                            <option>Price</option>
                            <option>More than $10K</option>
                            <option>From $1K to $10K</option>
                            <option>Less than $1K</option>
                        </select>
                        <select title="Rating">
                            <option>Rating</option>
                            <option>Good</option>
                            <option>Normal</option>
                            <option>Bad</option>
                        </select>
                    </div>
            </div>
            <section className="pl-list">
                {numberOfProducts.map(() => (
                    <div className="pl-list__product" onClick={onViewProduct}>
                        <img src={exampleProduct.image} />
                        <p>{exampleProduct.product_name}</p>
                        <p>{exampleProduct.price}</p>
                        <p>{exampleProduct.rating}</p>
                    </div>
                ) )}
            </section>
        </div>
    )
}

export default ProductList;