import React, { useState } from "react";
import { actionTypes } from "../../utils/contexts/reducer";
import { useStateValue } from "../../utils/contexts/StateProvider";
import "./Login.css";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, username: e.target.value });
    setError(false);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, password: e.target.value });
  };
  const [user, dispatch] = useStateValue();
  const handleLogin = () => {
    if (data.username !== "" && data.password !== "") {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({
        type: actionTypes.SET_USER,
        user: data,
      });
    } else {
      setError(true);
    }
  };
  return (
    <div className="login">
      <div className="login-modal">
        <h1>Login</h1>
        <div className="input-container">
          <div className="label">
            <h3>Enter Username</h3>
            <div className={`login-input ${error ? "error" : ""}`}>
              <input
                placeholder="username"
                className="no-outline"
                onChange={handleChangeUsername}
              />
            </div>
          </div>
          <div className="label">
            <h3>Enter Password</h3>
            <div className={`login-input ${error ? "error" : ""}`}>
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
