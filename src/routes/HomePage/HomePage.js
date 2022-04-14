import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "./Header.js"

export default function HomePage() {
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/test", {
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
        </main>
    )
}