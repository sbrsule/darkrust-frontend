import React, { useState} from "react";
import { useParams } from "react-router-dom";

export default function InputReply() {
    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");

    const { id } = useParams();

    const createPost = () => {
        if(body !== "") {
            fetch(`http://localhost:8080/create_reply/${id}`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                credentials: "include",
                body: JSON.stringify({"body": body, "subject": title})
            })
            .then((res) => {
                if(res.status < 400) {
                    window.location.reload(true);
                }
                else {
                    console.log("unable to post");
                }
            })
        }
    }
    return (
        <div className="post-cont reply-input-cont">
            <textarea className="body-text" value={body} placeholder="Text" onChange={e => setBody(e.target.value)}></textarea>
            <button className="post-btn" onClick={createPost}>Reply</button>
        </div>
    )
}