import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./HomePage.css";
import Header from "./Header.js";
import Body from "./Body.js";

export default function HomePage() {
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://api.darkrust.org/posts", {
            method: "GET",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        fetch("http://api.darkrust.org/test", {
            method: "POST",
            credentials: "include",
        })
        .then((res) => {
            if(res.status >= 400) {
                navigate("/")
            }
        })
    }, []);

    return (
        <main>
            <Header/>
            <Body />
        </main>
    )
}