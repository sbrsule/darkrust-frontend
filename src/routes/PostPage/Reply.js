import React, { props, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Reply(props) {
    const [username, setUsername] = useState("");
    const user_id = parseInt(props.user)
    const body = props.body;
    const title = props.title;

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
        <div className="post-cont reply-cont">
        <Link to={`/post/${id}`}>
            <div className="post-top reply-top">
                <h3 className="posters">{username}</h3>
            </div>
            <div className="post-body reply-bottom">
                <p>{body}</p>
            </div>
        </Link>
        </div>
    )
}