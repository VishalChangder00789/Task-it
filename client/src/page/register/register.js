import React, { useState, useEffect } from "react";
import axios from "axios";
import "./register.css";
import { server_register } from "../../paths/serverPaths";
import { Link, useNavigate } from "react-router-dom";
import { sendTDetailsToLocalStorage } from "../../controller/localStorageController";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordCharCount, setPasswordCharCount] = useState(0);
  const [passwordError, setPasswordError] = useState("");
  const passwordMinChars = 8;
  const passwordMaxChars = 20;

  const navigate = useNavigate();

  useEffect(() => {
    if (passwordCharCount < passwordMinChars) {
      setPasswordError(
        `Password must be at least ${passwordMinChars} characters.`
      );
    } else if (passwordCharCount > passwordMaxChars) {
      setPasswordError(
        `Password cannot exceed ${passwordMaxChars} characters.`
      );
    } else {
      setPasswordError("");
    }
  }, [passwordCharCount]);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;

    if (newPassword.length <= passwordMaxChars) {
      setPassword(newPassword);
      setPasswordCharCount(newPassword.length);
    }
  };

  const handleRegister = async () => {
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      passwordCharCount < passwordMinChars ||
      passwordCharCount > passwordMaxChars
    ) {
      return;
    }

    await axios
      .post(server_register, {
        name,
        email,
        password,
        confirmPassword,
      })
      .then((response) => {
        // let token = response.token;
        // let userId = response.data.newUser._id;

        console.log(response);

        let token = response.data.token;
        let userId = response.data.data.newUser._id;

        const details = {
          token,
          userId,
        };

        sendTDetailsToLocalStorage(details);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-h2">Register</h2>
        <form className="register-form">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />

          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
            placeholder={`Enter Password minimum ${passwordMinChars}`}
            required
          />
          <div className="char-count-password">
            {passwordCharCount}/{passwordMaxChars}
            {passwordError && (
              <div className="error-message">{passwordError}</div>
            )}
          </div>

          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Enter same Password Again"
            required
          />

          <button type="button" onClick={handleRegister}>
            Register
          </button>

          <div className="LinkTags">
            Already a User ? <Link to={"/login"}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
