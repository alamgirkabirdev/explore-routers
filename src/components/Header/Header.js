import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/friends'>Friends</Link>
            <Link to='/products'>products</Link>
            </nav>
            <p>
                Common header
            </p>
        </div>
    );
};

export default Header;
