import React, { useState } from "react";
import "./../styles/LoginForm.css";

const LoginForm: React.FC<{ onLogin: (username: string) => void }> = ({
    onLogin,
  }) => {
    const [username, setUsername] = useState("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (username.trim()) {
        onLogin(username.trim());
      }
    };
  
    return (
      <div className="login-page">
        <h2 className="login-title">Welcome to Your Todo App</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    );
  };
  

export default LoginForm;
