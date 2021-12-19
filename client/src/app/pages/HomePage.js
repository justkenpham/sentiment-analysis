import React from 'react'
import "./HomePage.css"
import AppLogo from '../assets/icon/brand.png'
import AppImage from '../assets/sentiment-analysis.png'
import Footer from "./ProductDetail/product-detail-footer"

import { useHistory } from 'react-router-dom'

const HomePage = (props) => {
    const history = useHistory();
    return(
        <section className='page'>
            <header>
                <img className='logo' src={AppLogo}/>
                <ul>
                    <li><a className="homepage" onClick={e => history.push("/product-list")}>HomePage</a></li>
                    <li><a className="login" onClick={e => history.push("/login")}>Login</a></li>
                    <li><a className="signup" onClick={e => history.push("/register")}>Register</a></li>
                </ul>
            </header>
            <div className='content'>
                <div className='text'>
                    <h2>Sentimental Analysis For Product Rating</h2>
                    <p>Help customers learn more about the products, so that they can make better decisions on purchasing the products.</p>
                </div>
                <img className='image' src={AppImage}/>
            </div> 
        </section>
    )
}

export default HomePage;
