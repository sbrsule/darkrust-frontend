import React from "react";

export default function Body() {
    return (
        <div className="AboutBody">
            <div className="head">
                <h1>About This Project</h1>
            </div>
            <div className="text">
                <h2>Who am I?</h2>
                <p>I am a CS student who is interested in low-level programing as well as backend web-development.</p>
                <h2>Why this project?</h2>
                <p>I chose to create a web-forum because I thought it would be an interesting challenge, as well as also helping me learn new technologies. This project was also my first full-stack web application.</p>
                <h2>Technologies used in this site</h2>
                <p>For the frontend of this project, I used Reactjs, a popular javascript framework.</p>
                <p>For the backend I chose a more niche programming language, Rust, using the actix-web framework. The reason I chose this framework was due to it's <a href="https://www.techempower.com/benchmarks/#section=test&runid=e0e5d81b-7177-43a3-8e71-72680544dd50&hw=ph&test=fortune">blazing fast benchmarks</a> compared to more popular alternatives like Django or Nodejs.</p> 
                <p>The database used is PostGreSQL, and the web app is running on a docker container in a vps.</p>
            </div>
            <div className="head">
                <h1>About This Site</h1>
            </div>
            <div className="text">
                <h2>Users</h2>
                <p>To register, simply sign up on the landing or login in the login page, once you are logged in, you are able to access the forum.</p>
                <h2>Posts</h2>
                <p>The forum displays the ten most recent posts, however older posts are still stored in the database and are therefore accessible.</p>
                <p>To reply to a post, simply click on the post to enter it's seperate page and scroll to the bottom to enter your reply.</p>
            </div>
        </div>
    )
}