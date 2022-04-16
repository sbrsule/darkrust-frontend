import React, {props} from "react";
import {Link, useParams} from "react-router-dom"
import './Post.css';

export default function Post(props) {
    const { id } = useParams();
    return (
        <div className="post-cont">
        <Link to={`/post/${props.id}`}>
            <div className="post-top">
                <h3 className="posters">{props.user}</h3>
                <h3>{props.title}</h3>
            </div>
            <div className="post-body">
                <p>{props.body}</p>
            </div>
            <div className="post-bottom">
                <p>{props.replies}</p>
            </div>
        </Link>
        </div>
    )
}