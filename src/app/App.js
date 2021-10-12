import React, {useState} from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email:"1@1.com",
    password: "123"
  }

  const [user, setUser] = useState({name: "", email: ""})
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });

    } else {
      console.log("Details do not match!");
      setError("Details donot match!");

    }
  
  }

  const Logout = () => {
    setUser({name: "",email: ""});
  }
  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h1>This page is only to show that the user has successfully logged in</h1>
          <h2>User name: <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )
    }
    </div>
  );
}

export default App;
