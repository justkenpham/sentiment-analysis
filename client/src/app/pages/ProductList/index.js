import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { ProductFilter } from '../../constants/Product';
import { getAllProducts } from '../../utils/product.utils';
import { SortRating } from '../../utils/sort';
import Footer from '../ProductDetail/product-detail-footer';
import "./index.css"

const ProductList = props => {

    const [productList, setProductList] = React.useState([]);
    const [originalProductList, setOriginalProductList] = React.useState([]);

    useEffect(() => {
        getAllProducts().then(res => {
            setProductList(res);
            setOriginalProductList(res);
        })
    }, [])

    const onViewProduct = (prod) => {
        props.history.push("/product-detail", {
            product_id: prod.product_id
        })
    }

    const onFilteringProductBasedOnPrice = (e) => {
        let range = e.target.value;
        let searchedProducts = [];

        if (range == ProductFilter.tag.price.Lowest) {
            for (let i = 0; i < originalProductList.length; i++) {
                if (originalProductList[i].price < 100) {
                    searchedProducts.push(originalProductList[i])
                }
            }
        } else if (range == ProductFilter.tag.price.Medium) {
            for (let i = 0; i < originalProductList.length; i++) {
                if (originalProductList[i].price > 100 && originalProductList[i].price < 500) {
                    searchedProducts.push(originalProductList[i])
                }
            }
        } else if (range == ProductFilter.tag.price.Biggest) {
            for (let i = 0; i < originalProductList.length; i++) {
                if (originalProductList[i].price > 500) {
                    searchedProducts.push(originalProductList[i])
                }
            }
        } else {
            let tempList = [].concat(originalProductList);
            setProductList(tempList);
            return;
        }
        setProductList(searchedProducts);
    }

    const onFilteringProductBasedOnRating = (e) => {
        let range = e.target.value;
        let searchedProducts = [].concat(originalProductList);

        if (range !== "🤔 Rating") {
            SortRating(searchedProducts, range)
        }
        else {
            let tempList = [].concat(originalProductList);
            setProductList(tempList);
            return;
        }
        setProductList(searchedProducts);
    }

    return (
        <>
            <Header
                setProductList={setProductList}
            />
            <div className="pl-container" style={{ marginBottom: "100px" }}>
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
                        <div className="pl-list__product" onClick={() => onViewProduct(prod)}>
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
                    ))) : null}
                </section>
            </div>
            <Footer />
        </>
    )
}

export default ProductList;