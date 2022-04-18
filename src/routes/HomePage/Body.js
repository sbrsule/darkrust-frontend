import React, { useState, useEffect } from "react";
import InputPost from "./InputPost";
import Post from "../../misc/Post.jsx";

export default function Body() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('http://api.darkrust.org/posts', {
            method: "GET",
        })
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setPost(data)
        })
    }, []);
    const renderPost = post.map((post) => <Post id={post.id} user={post.user_id} title={post.subject} replies={post.reply_id.length} body={post.body} />)

    return (
        <body className="HomeBody">
            <InputPost />
            {renderPost}
        </body>
    )
}