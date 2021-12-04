import React, { useEffect } from 'react';
import { ProductFilter } from '../../constants/Product';
import { getAllProducts } from '../../utils/product.utils';
import { QuickSort, SortRating } from '../../utils/sort';

import "./index.css"

const ProductList = props => {

    const [productList, setProductList] = React.useState([]);
    const [originalProductList, setOriginalProductList] = React.useState([]);
    
    const onViewProduct = () => {
        props.history.push("/product-detail")
    }

    useEffect(() => {
        getAllProducts().then(res => {
            setProductList(res);
            setOriginalProductList(res);
        })
    },[])

    const onFilteringProductBasedOnPrice = (e) => {
        let range = e.target.value;
        let searchedProducts = [];
        
        if(range == ProductFilter.tag.price.Lowest){
            for(let i = 0; i < originalProductList.length; i++){
                if(originalProductList[i].price < 100){
                    searchedProducts.push(originalProductList[i])
                }
            }
            console.log(searchedProducts);
        }else if(range == ProductFilter.tag.price.Medium){
            for(let i = 0; i < originalProductList.length; i++){
                if(originalProductList[i].price > 100 && originalProductList[i].price < 500){
                    searchedProducts.push(originalProductList[i])
                }
            }
        }else if(range == ProductFilter.tag.price.Biggest){
            for(let i = 0; i < originalProductList.length; i++){
                if(originalProductList[i].price > 500){
                    searchedProducts.push(originalProductList[i])
                }
            }
        }else{
            let tempList = [].concat(originalProductList);
            setProductList(tempList);
            return;
        }
        setProductList(searchedProducts);
    }

    const onFilteringProductBasedOnRating = (e) => {
        let range = e.target.value;
        console.log("rating range", range)
        let searchedProducts = [].concat(originalProductList);
        console.log("searched Products", searchedProducts)

        if(range !== "🤔 Rating"){
            SortRating(searchedProducts, range)
        }
        else{
            let tempList = [].concat(originalProductList);
            setProductList(tempList);
            return;
        }
        console.log("after filter by rating", searchedProducts)
        setProductList(searchedProducts);
    }

    return(
        <div className="pl-container">
            <div className="pl-filter">
                <p>Filter</p>
                <div className="pl-select">
                    <select onChange={onFilteringProductBasedOnPrice} title="Price">
                        <option value="💵 Price">💵 Price</option>
                        <option value={ProductFilter.tag.price.Biggest}>More than $500</option>
                        <option value={ProductFilter.tag.price.Medium}>From $100 to $500</option>
                        <option value={ProductFilter.tag.price.Lowest}>Less than $100</option>
                    </select>
                    <select onChange={onFilteringProductBasedOnRating} title="Rating">
                        <option>🤔 Rating</option>
                        <option value={ProductFilter.tag.rating['Highest To Lowest']}>Highest to Lowest</option>
                        <option value={ProductFilter.tag.rating['Lowest To Highest']}>Lowest to Highest</option>
                    </select>
                </div>
            </div>
            <section className="pl-list">
                {productList ? (productList.map((prod) => (
                    <div className="pl-list__product" onClick={onViewProduct}>
                        <img className="pl-list__product__img" src={prod.image} />
                        <div className="pl-list__product__under-img">
                            <div className="pl-list__product__name">
                                {prod.product_name}
                            </div>
                            <div className="pl-list__product__under-name">
                                <p className="pl-list__product__under-name__price">${prod.price}</p>
                                <p className="pl-list__product__under-name__rating">{prod.rating}</p>
                            </div>
                        </div>
                    </div>
                ))) : null }
            </section>
        </div>
    )
}

export default ProductList;