import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import LoginPage from './LoginPage/LoginPage';

export default function myRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>      
    )
}