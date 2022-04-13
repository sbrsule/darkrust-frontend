import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function checkUsername(username, setUsernameError) {
    if (username.length < 8) {
        setUsernameError("Must be atleast 8 characters");
        return false;
    }
    setUsernameError("");
    return true;
}

function checkPasswords(password, confirmPassword, setPasswordError) {
    if (password !== confirmPassword) {
        setPasswordError("Passwords don't match");
        return false; 
    }
    if (password.length < 8) {
        setPasswordError("Must be atleast 8 characters");
        return false;
    }
    setPasswordError("");
    return true;
}

export default function Body() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError , setPasswordError] = useState("");

    const navigate = useNavigate();

    const register = () => {
        const goodUsername = checkUsername(username, setUsernameError)
        const goodPasswords = checkPasswords(password, confirmPassword, setPasswordError)
        if (goodUsername && goodPasswords) {
            fetch('http://localhost:8080/register', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body:  JSON.stringify({"username": username, "password": password}) 
            })
            .then((res) => {
                if(res.status < 400) {
                    navigate("/home");
                }
            })
        }
    }

    return (
        <body className='LandBody'>
            <div className="about-cont">
                <h1>A forum all about Rust-Lang</h1>
            </div>
            <div className="register-cont">
                <h2>Sign Up Now</h2>
                <div className="register-inner-cont">
                    <div className="register-input-cont">
                        <h3>Username</h3>
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                        <p className='errorMsg'>{usernameError}</p>
                    </div>
                    <div className="register-input-cont">
                        <h3>Password</h3>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                        <p className='errorMsg'>{passwordError}</p>
                    </div>
                    <div className="register-input-cont">
                        <h3>Confirm Password</h3>
                        <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                        <p className='errorMsg'>{passwordError}</p>
                    </div>
                </div>
                <button className='register-btn' onClick={register}>Sign Up</button>
            </div>
        </body>
    )
}