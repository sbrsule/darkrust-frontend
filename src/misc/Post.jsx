import React, { props, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import ReplyIcon from '@mui/icons-material/Reply';
import './Post.css';

function truncateString(text, num) {
    if (text.length <= num) {
        return text;
    }
    
    return text.slice(0, num) + "...";
}

export default function Post(props) {
    const [username, setUsername] = useState("");
    const user_id = parseInt(props.user)
    const body = truncateString(props.body, 600);
    const title = truncateString(props.title, 20);

    useEffect(() => {
        fetch("https://api.darkrust.org/get_username", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"id": user_id})
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            setUsername(data.username)
        })
    }, [])
    const { id } = useParams();
    return (
        <div className="post-cont">
        <Link to={`/post/${props.id}`}>
            <div className="post-top">
                <h3 className="posters">{username}</h3>
                <h3>{title}</h3>
            </div>
            <div className="post-body">
                <p>{body}</p>
            </div>
            <div className="post-bottom">
                <ReplyIcon className="reply-icon"/>
                <p>{props.replies}</p>
            </div>
        </Link>
        </div>
    )
}