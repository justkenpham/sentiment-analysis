import React from 'react'
import "./HomePage.css"
import AppLogo from '../assets/icon/brand.png'
import AppImage from '../assets/sentiment-analysis.png'
import Facebook from '../assets/facebook.png'
import Ig from '../assets/instagram.png'
import TW from '../assets/twitter.png'

import { useHistory } from 'react-router-dom'

const HomePage = (props) => {
    const history = useHistory();
    return (
        <section className='page'>
            <header>
                <img className='logo' src={AppLogo} />
                <ul>
                    <li><a className="homepage" onClick={e => history.push("/product-list")}>Search</a></li>
                    <li><a className="login" onClick={e => history.push("/login")}>Login</a></li>
                    <li><a className="signup" onClick={e => history.push("/register")}>Register</a></li>
                </ul>
            </header>
            <div className='content'>
                <div className='text'>
                    <h2>Sentimental Analysis For Product Rating</h2>
                    <p>Help customers learn more about the products, so that they can make better decisions on purchasing the products.</p>
                </div>
                <img className='image' src={AppImage} />
                <ul class='sci'>
                    <li><a href="https://www.facebook.com/"><img className='fb' href src={Facebook} /></a></li>
                    <li><a href="https://www.instagram.com/"><img className='ig' src={Ig} /></a></li>
                    <li><a href="https://www.pinterest.com/"><img className='tw' src={TW} /></a></li>
                </ul>
            </div>
        </section>
    )
}

export default HomePage;
