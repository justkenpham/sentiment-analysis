import React, { useState } from 'react';

export default function RegisterForm(props) {
    const adminUser = {
        name: "phong",
        password: "123"
    };
    const [details, setDetails] = useState({ name: "", password: "", confirmPass: "" });
    const [user, setUser] = useState({ name: "", password: "" });
    const [error, setError] = useState("");
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    const Signup = (details) => {
        if (format.test(details.name))
            setError("Username must not contain special characters");
        else if (
            details.name != adminUser.name &&
            details.password == details.confirmPass
        ) {
            setUser({
                name: details.name,
                password: details.password,
            });
        } else {
            setError("Already have this account or check the password again");
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        Signup(details);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Register</h2>
                {error != "" ? <p className="error">{error}</p> : null}
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) => setDetails({ ...details, name: e.target.value })}
                        value={details.name}
                        placeholder="Enter your username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setDetails({ ...details, password: e.target.value })}
                        value={details.password}
                        placeholder="****************" />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setDetails({ ...details, confirmPass: e.target.value })}
                        value={details.confirmPass}
                        placeholder="****************" />
                </div>
                <input type="submit" value="SIGN UP" />
            </div>
            <div>
                {user.name != "" ? props.history.push("/login") : null}
            </div>
        </form>
    )
}

