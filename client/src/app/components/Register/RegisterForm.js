import React, { useState } from 'react';
import { postRegistrationToBE } from '../../utils/auth.utils';
export default function RegisterForm(props) {

    const [details, setDetails] = useState({ name: "", password: "", confirmPass: "" });
    const [user, setUser] = useState({ name: "", password: "" });
    const [error, setError] = useState("");
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    const Signup = async (details) => {
        if (format.test(details.name))
            setError("Username must not contain special characters");

        else if (
            details.password === details.confirmPass
        )
        //Normal registration 
        {
            const { name, password, confirmPass } = details
            const response = await postRegistrationToBE(name, password, confirmPass)
            console.log("Register response", response)

            // Handle failed registration
            if (response.errorMessage !== undefined)
                setError(response.errorMessage);
            else {

                // Handle successful registration
                console.log("SET USER")
                setUser({
                    name: details.name,
                    password: details.password,
                });
            }
        }
        else {
            setError("Confirm password and password does not match")
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        Signup(details);
    };
    const { name, password, confirmPass } = details

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Register</h2>
                {error != "" ? <p className="error">{error}</p> : null}
                <div className="form-group">
                    <label>Username</label>
                    <input
                        minLength="6"
                        required
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
                        required
                        minLength="6"
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
                        required
                        minLength="6"
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
                {user.name != "" ? props.history.push({pathname: '/login', state: {details: 'Register successfully'}}) : null}
            </div>
        </form>
    )
}

