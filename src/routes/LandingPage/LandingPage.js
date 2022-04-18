import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';

export default function LandingPage() {

    const navigate = useNavigate();
    useEffect(() => {
        const goHome = () => navigate('/home');
        fetch("http://api.darkrust.org/test", {
            method: "POST",
            credentials: "include",
        })
        .then((res) => {
            if (res.status < 400) {
                navigate('/home');
            } 
        })
    }, []);

    return (
        <main className='LandingPage'>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </main>
    )
}