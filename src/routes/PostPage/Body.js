import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Post from './Post.js'
import Reply from './Reply.js'
import InputReply from './InputReply.js'
export default function Body() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [readyPost, setReadyPost] = useState(false);
    const [readyReplies, setReadyReplies] = useState(false);
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        fetch(`http://api.darkrust.org/post/${id}`, {
            method: "GET",
        })
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setPost(data)
            setReadyPost(true)
        })

        fetch(`http://api.darkrust.org/replies/${id}`, {
            method: "GET",
        })
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setReplies(data)
            setReadyReplies(true)
        })
    }, [])


    const renderReplies = replies.map((post) => <Reply id={post.id} user={post.user_id} title={post.subject} replies={post.reply_id.length} body={post.body} />)

    return (
        <div className='PostBody'>
            {readyPost && <Post id={post.id} user={post.user_id} body={post.body} title={post.subject} replies={post.reply_id.length} />}
            {readyReplies && renderReplies}
            <InputReply />
        </div>
    )
}