import React from 'react';
import './index.css'

const Header = (props) => {
    return(
        <div className="header">
            <p className="header__name">App Name</p>
            <input placeholder="Search your products" className="header__input" />
        </div>
    )
}

export default Header;