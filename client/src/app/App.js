import "./App.css";
import MainRoute from "./routes/MainRoute";
import React, { useState } from "react";
import Header from './components/Header/index'

function App() {

  return (
    <div className="App">
      <Header/>
      <MainRoute />
      {/* {user.email != "" ? (
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
      )} */}
    </div>
  );
}

export default App;
