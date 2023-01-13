import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, username: e.target.value });
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, password: e.target.value });
  };
  const handleLogin = () => {
    console.log(data);
  };
  return (
    <div className="login">
      <div className="login-modal">
        <h1>Login</h1>
        <div className="input-container">
          <div className="label">
            <h3>Enter Username</h3>
            <div className="login-input">
              <input
                placeholder="username"
                className="no-outline"
                onChange={handleChangeUsername}
              />
            </div>
          </div>
          <div className="label">
            <h3>Enter Password</h3>
            <div className="login-input">
              <input
                type="password"
                className="no-outline"
                placeholder="password"
                onChange={handleChangePassword}
              />
            </div>
          </div>
          <button className="clear-btn" onClick={handleLogin}>
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
