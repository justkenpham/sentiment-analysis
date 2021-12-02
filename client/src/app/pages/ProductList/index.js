import React from 'react';
import { exampleProduct } from '../../constants/Product';

import "./index.css"

const ProductList = props => {
    let numberOfProducts = [1,2,3,4,5,6,7,8,9];
    return(
        <>
            <div className="pl-filter">
                <p>Filter</p>
                    <div>
                        <button>Dropdowns</button>
                        <button>Dropdowns</button>
                        <button>Dropdowns</button>
                    </div>
            </div>
            <section className="pl-list">
                {numberOfProducts.map(() => (
                    <div className="pl-list__product">
                        <img src={exampleProduct.productImage} />
                        <p>{exampleProduct.productName}</p>
                        <p>{exampleProduct.productPrice}</p>
                        <img src={exampleProduct.productRating}/>
                        <p>{exampleProduct.productScore}</p>
                    </div>
                ) )}
            </section>
        </>
    )
}

export default ProductList;