import React from "react";
import { useNavigate } from "react-router-dom";
import './SignOutBtn.css';

export default function SignOutBtn() {
    const navigate = useNavigate();

    const logout = () => {
        fetch("https://api.darkrust.org/logout", {
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
        <button className="signout-btn" onClick={logout}>Sign Out</button>
    )
}