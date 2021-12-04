import React from 'react';
import logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom'

import './index.css'

import SearchIcon from '../../assets/icon/search-icon.svg'
import AppLogo from '../../assets/icon/brand.png'

const Header = (props) => {
    return(
        <div className="ctn">
            <div className="ctn__info">
                <img className="ctn__info__logo" src={AppLogo} />
                {/* <div className="ctn__info__name">Senti!</div> */}
            </div>
            <div className="ctn__search">
                <img src={SearchIcon} />
                <input type="text" name="search" placeholder="Find your product category..." className="search-input"/>
                <a href="#" className="search-btn">
                        <i className="fas fa-search"></i>      
                </a>
            </div>
            <div className="pl-btn">    
                <div className="pl-btn__login">Login</div>
                <div className="pl-btn__signup">Signup</div>
            </div>
        </div>
    )
}

export default Header;