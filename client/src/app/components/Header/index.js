import React from 'react';
import logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom'

import './index.css'

const Header = (props) => {
    return(
        <div className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="" />
                    
                </div>  
                <p className="header__name">App Name</p>
                <input placeholder="Search your products" className="header__input" />
                <ul className="header_nav">
                    <li className="product-list">Product List</li>
                    <li className="SignIn">Login</li>
                </ul>
            </div>
        </div>
        
    )
}

export default Header;