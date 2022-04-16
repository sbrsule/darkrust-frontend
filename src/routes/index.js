import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage/HomePage';
import AccountPage from './AccountPage/AccountPage';
import PostPage from './PostPage/PostPage';

export default function myRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/account" element={<AccountPage/>}/>
                <Route path="/post/:id" element={<PostPage/>}/>
            </Routes>
        </BrowserRouter>      
    )
}