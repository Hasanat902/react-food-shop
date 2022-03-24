import React from 'react';
import logo from '../../images/food-shop.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/Menu">Menu</a>
                <a href="/seafood">SeaFood</a>
                <a href="/special">Special</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;