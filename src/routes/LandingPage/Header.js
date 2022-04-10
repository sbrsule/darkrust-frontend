import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <div className='HomeHeader'>
            <h2>DarkRust</h2>
            <div className="User-btns">
                <Link to="/login">
                    <button className="login-btn">Login</button>
                </Link>
                <Link to="/register">
                    <button className="signup-btn">Sign-Up</button>
                </Link>
            </div>
        </div>
    )
}