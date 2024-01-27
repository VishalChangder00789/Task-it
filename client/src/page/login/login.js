import React, { useState, useEffect } from "react";

//#region  ---------------------------- THIRD PARTY IMPORTS ----------------------------
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//#endregion  ---------------------------- THIRD PARTY IMPORTS ----------------------------

//#region  ---------------------------- FILE IMPORTS ----------------------------
import "./login.css";
import { sendTDetailsToLocalStorage } from "../../controller/localStorageController";
import { server_login } from "../../paths/serverPaths";
//#endregion

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      return;
    }

    await axios
      .post(server_login, {
        email,
        password,
      })
      .then((response) => {
        console.log(response);

        const token = response.data.token;
        const userId = response.data.data.userId;
        const username = response.data.data.userName;

        const details = {
          token,
          userId,
        };

        sendTDetailsToLocalStorage(details);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-h2">Login</h2>
        <form className="login-form">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />

          <button type="button" onClick={handleLogin}>
            Login
          </button>

          <div className="LinkTags">
            Not Logged In ? <Link to={"/register"}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
