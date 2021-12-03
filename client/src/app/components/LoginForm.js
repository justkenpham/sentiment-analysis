import React, { useState } from "react";
import "./LoginForm.css";
function LoginForm(props) {
  const adminUser = {
    name: "phong",
    password: "123"
  };
  const [details, setDetails] = useState({ name: "", password: "" });
  const [user, setUser] = useState({ name: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (
      details.name == adminUser.name &&
      details.password == adminUser.password
    ) {
      setUser({
        name: details.name,
        password: details.password,
      });
    } else {
      setError("Incorrect username or password");
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
    <form onSubmit={submitHandler}>
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
        <input type="submit" value="LOGIN" />
      </div>
      <div>
        {user.name != "" ? props.history.push("/product-list") : null}
      </div>
    </form>
  );
}

export default LoginForm;