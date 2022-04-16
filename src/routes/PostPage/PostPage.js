import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import Header from "../HomePage/Header.js"
import Body from "./Body.js"
import './PostPage.css';

export default function PostPage() {
    useEffect = (() => {
        
    }, [])

    const { id }= useParams();
    return (
        <main> 
            <Header />
            <Body />
        </main>
    )
}