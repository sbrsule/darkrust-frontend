import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Body() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loggedIn, setLogin] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://api.darkrust.org/test', {
            method: "POST",
            credentials: "include",
        })
        .then((res) => {
            if(res.status < 400) {
                navigate("/home");
            }
        })
    }, [])

    const login = () => {
        if (username !== "" && password !== "") {
            fetch('https://api.darkrust.org/login', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                credentials: "include",
                body: JSON.stringify({"username": username, "password": password})
            })
            .then((res) => {
                if(res.status == 400) {
                    setPasswordError("Incorrect Password");
                    setUsernameError("");
                }
                else if (res.status == 404) {
                    setUsernameError("Username not found");
                    setPasswordError("");
                }
                else if (res.status < 400) {
                    navigate("/home");
                }
            })
        }
    }
    return (
        <body className='LoginBody'>
            <div className="login-container">
                <h2>Log In</h2>
                <div className="login-inputs">
                    <div className="login-inner-cont">
                        <h3>Username</h3>
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                        <p className="errorMsg">{usernameError}</p>
                    </div>
                    <div className="login-inner-cont">
                        <h3>Password</h3>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                        <p className="errorMsg">{passwordError}</p>
                    </div>
                </div>
                <button className="register-btn" onClick={login}>Login</button>
            </div>
        </body>
    )
}