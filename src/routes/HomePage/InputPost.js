import React, { useState} from "react";

export default function InputPost() {
    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");

    const createPost = () => {
        if(body !== "" && title !== "") {
            fetch("http://localhost:8080/create_post", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                credentials: "include",
                body: JSON.stringify({"body": body, "subject": title})
            })
            .then((res) => {
                if(res.status < 400) {
                    console.log("success!");
                }
                else {
                    console.log("unable to post");
                }
            })
        }
    }
    return (
        <div className="post-cont">
            <textarea className="title-text" rows="1" value={title} placeholder="Title" onChange={e => setTitle(e.target.value)}></textarea>
            <textarea className="body-text" value={body} placeholder="Text" onChange={e => setBody(e.target.value)}></textarea>
            <button className="post-btn" onClick={createPost}>Post</button>
        </div>
    )
}