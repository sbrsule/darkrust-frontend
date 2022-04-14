import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const logout = () => {
        fetch("http://localhost:8080/logout", {
            method: "POST",
            credentials: "include",
        })
        .then((res) => {
            if(res.status < 400) {
                navigate("/");
            }
        })
    }

    return (
        <div className="LandHeader">
            <h2 className="Logo">DarkRust</h2>
            <div className="User-btns">
                <Link to="/account">
                    <button className="login-btn">Account</button>
                </Link>
                <button className="login-btn" onClick={logout}>Sign Out</button>
                <Link to="/about">
                    <button className="about-btn">About</button>
                </Link>
            </div>
        </div>
    )
}