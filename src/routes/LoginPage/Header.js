import React from 'react';
import { Link } from 'react-router-dom';
import '../LandingPage/LandingPage.css';

export default function Header() {
    return (
        <div className='LandHeader'>
            <h2 className='Logo'>DarkRust</h2>
            <div className="User-btns">
                <Link to="/">
                    <button className="login-btn">Sign Up</button>
                </Link>
            </div>
        </div>
    )
}