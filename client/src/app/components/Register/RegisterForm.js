import React from 'react';

export default function RegisterForm() {
    return (
        <form>
            <div className="form-inner">
                <h2>Register</h2>
                <div className="form-group">
                    <label>Username</label>
                    <input placeholder="Enter your username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input placeholder="Enter your password" />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input placeholder="Renter your password" />
                </div>
                <input type="submit" value="SIGN UP" />
            </div>
        </form>
    )
}

