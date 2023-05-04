import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Make a request to the API
    const request = new Request("https://api.example.com/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    fetch(request)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setIsLoggedIn(true);
        } else {
          alert("Invalid login credentials. Please try again.");
        }
      });
  };

  return (
    <div>
      <h1>WELCOME TO BMTC</h1>
      <div class="login-box">
        <h1>Login</h1>
        <form>
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="submit"
            value="Login"
            onClick={handleLogin}
          />
        </form>
      </div>
      {isLoggedIn && <h1>You are logged in!</h1>}
    </div>
  );
};

export default App;
