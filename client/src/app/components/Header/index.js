import React from 'react';
import logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom'
import './index.css'
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import SearchIcon from '../../assets/icon/search-icon.svg'
import AppLogo from '../../assets/icon/brand.png'
import LoginForm from '../LoginForm';
import RegisterForm from '../Register/RegisterForm';
import { searchProduct } from '../../utils/product.utils';
import SearchBar from './SearchBar';

const Header = (props) => {

    const onSearchCategory = (e) => {
        if (e.key === 'Enter') {
            searchProduct(e.target.value).then(res => props.setProductList(res))
        }
    }

    return (
        <div className="ctn">
            <div className="ctn__info">
                <img className="ctn__info__logo" src={AppLogo} />
            </div>
            <SearchBar
                onSearchCategory={onSearchCategory}
            />
            <div className="pl-btn">
                <div className="pl-btn__login">Login</div>
                <div className="pl-btn__signup">Signup</div>
                <div className="pl-logout">Logout</div>
            </div>
        </div>
    )
}

export default Header;