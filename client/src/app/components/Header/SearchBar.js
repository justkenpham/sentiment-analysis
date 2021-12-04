import React from 'react';
import SearchIcon from '../../assets/icon/search-icon.svg'
import './SearchBar.css'

const SearchBar = (props) => {
    return(
        <div className="ctn__search">
            <img src={SearchIcon} />
            <input onKeyPress={props.onSearchCategory} type="text" name="search" placeholder="Find your product category..." className="search-input"/>
            <a href="#" className="search-btn">
                <i className="fas fa-search"></i>      
            </a>
        </div>
    )
}

export default SearchBar;