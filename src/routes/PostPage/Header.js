import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignOutBtn from '../../misc/SignOutBtn.jsx';

export default function Header() {
    return (
        <div className="LandHeader">
            <h2 className="Logo">DarkRust</h2>
            <div className="User-btns">
                <Link to="/home">
                    <button className="login-btn">Home</button>
                </Link>
                <Link to="/account">
                    <button className="login-btn">Account</button>
                </Link>
                <Link to="/about">
                    <button className="login-btn">About</button>
                </Link>
                <SignOutBtn />
            </div>
        </div>
    )
}