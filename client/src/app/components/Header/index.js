import React from 'react';
import logo from "../../assets/logo.svg";
import { useHistory } from 'react-router-dom'
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
    const { login, setLogin } = useContext(UserContext)
    const history = useHistory()
    const onSearchCategory = (e) => {
        if (e.key === 'Enter') {
            searchProduct(e.target.value).then(res => props.setProductList(res))
        }
    }

    const handleLogOut = () => {
        setLogin(null)
    }
    return (
        <div className="ctn">
            <div className="ctn__info">
                <img className="ctn__info__logo" src={AppLogo} onClick={e => history.push("/homepage")}/>
            </div>
            <SearchBar
                onSearchCategory={onSearchCategory}
            />
            <div className="pl-btn">
                {
                    login ? (
                        <div className="pl-logout" onClick={handleLogOut}>Logout</div>
                    ) : (
                        <>
                            <div className="pl-btn__login" onClick={e => history.push("/login")}>Login</div>
                            <div className="pl-btn__signup" onClick={e => history.push("/register")}>Signup</div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Header;