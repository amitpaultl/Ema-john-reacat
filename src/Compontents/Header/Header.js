import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header-bg'>
            <nav className='menu-area'>
                <div className="logo-area">
                    <a href="/home"><img src={logo} alt="" /></a>
                </div>
                <div className="menu-aera">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/home">Order Review</a></li>
                        <li><a href="/home">Manage Inventory</a></li>
                        <li><a href="/home">Login</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;