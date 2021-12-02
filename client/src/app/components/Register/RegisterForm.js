import React from 'react';

export default function RegisterForm() {
    return (
        <form>
            <div className="form-inner">
                <h2>Register</h2>
                <div className="form-group">
                    <label>Email</label>
                    <input placeholder="example@gmail.com" />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input placeholder="Enter your username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input placeholder="****************" />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input placeholder="****************" />
                </div>
                <input type="submit" value="SIGN UP" />
            </div>
        </form>
    )
}

