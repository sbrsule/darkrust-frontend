import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function Header() {
    return (
        <div className='LandHeader'>
            <h2 className='Logo'>DarkRust</h2>
            <div className="User-btns">
                <Link to="/login">
                    <button className="login-btn">Login</button>
                </Link>
            </div>
        </div>
    )
}