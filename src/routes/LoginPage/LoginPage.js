import React from 'react';

export default function LandingPage() {
    return (
        <div className='LoginForm'>
            <form>
                <div className='InputContainer'>
                    <label>Username</label>
                    <input type="text" name="username" required />
                </div>
                <div className='InputContainer'>
                    <label>Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="BtnContainer">
                    <input type="submit" value="Log In"/>
                </div>
            </form>
        </div>
    )
}