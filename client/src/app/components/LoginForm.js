import React, { useState } from "react";
import "./LoginForm.css";
import { loginCheckInBE } from "../utils/auth.utils"
function LoginForm(props) {
  const adminUser = {
    name: "phong",
    password: "123"
  };
  const [details, setDetails] = useState({ name: "", password: "" });
  const [user, setUser] = useState({ name: "", password: "" });
  const [error, setError] = useState("");

  const Login = async (details) => {
    const response = await loginCheckInBE(details.name, details.password)

    // Handle failed login
    if (response.length < 1) {
      setError(" Incorrect password/username ");

    }
    else {

      // Handle successful login
      console.log("LOGIN USER")
      setUser({
        name: details.name,
        password: details.password,
      });
    }
  }
  const Logout = () => {
    setUser({ name: "", password: "" });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {error != "" ? <p className="error">{error}</p> : ""}
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
            placeholder="Please enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
            placeholder="*****************"
          />
        </div>
        <input required type="submit" value="LOGIN" />
      </div>
      <div>
        {user.name != "" ? props.history.push("/product-list") : null}
      </div>
    </form>
  );
}

export default LoginForm;