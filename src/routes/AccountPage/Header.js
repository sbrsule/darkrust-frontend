import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function Header() {
    return (
        <div className='LandHeader'>
            <h2 className='Logo'>DarkRust</h2>
            <div className="User-btns">
                <Link to="/home">
                    <button className="login-btn">Home</button>
                </Link>
                <button className="login-btn">Sign Out</button>
                <Link to="/about">
                    <button className="about-btn">About</button>
                </Link>
            </div>
        </div>
    )
}