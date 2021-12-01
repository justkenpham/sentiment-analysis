import "./App.css";
import Header from "./components/Header";
import MainRoute from "./routes/MainRoute";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/Register/RegisterForm";

function App() {
  const adminUser = {
    email: "1@1.com",
    password: "123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Details don't match!");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {/* <Header /> */}
      <MainRoute />
      {user.email != "" ? (
        <div className="welcome">
          <h1>Successfully logged in</h1>
          <h2>
            User name: <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
        // <RegisterForm />
      )}
    </div>
  );
}

export default App;
