import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from "./Header.js"
import Body from "./Body.js"
import './PostPage.css';

export default function PostPage() {
    const { id }= useParams();
    return (
        <main> 
            <Header />
            <Body />
        </main>
    )
}