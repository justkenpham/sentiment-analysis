import "./App.css";
import MainRoute from "./routes/MainRoute";
import React, { useState, useMemo, useContext } from "react";
import Header from './components/Header/index'
import { UserContext } from "./context/UserContext";
function App() {
  const [login, setLogin] = useState(null)
  const loginStatus = useMemo(() => ({ login: login, setLogin: setLogin }), [login, setLogin])
  return (
    <div className="App">
      <UserContext.Provider value={loginStatus}>
        <MainRoute />
      </UserContext.Provider>

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
