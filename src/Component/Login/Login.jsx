import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Login.module.css'; 

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      setIsLoggedIn(true);  
      navigate("/landing");  
    } else {
      alert("Invalid credentials!");  
    }
  };

  return (
    <div className={styles.backContainer}>
      <div className={styles.formContainer}>
        <div className={styles.formLeft}>
          <h4>Login</h4>
          <p className={styles.p1}>Don't have an account? <a href="#" onClick={() => navigate("/signup")}>Create an account here</a></p>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email id</label>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <div className={styles.inputWrapper}>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
            </div>

            <button className={styles.button2} type="submit">Submit</button>
          </form>
        </div>

        <div className={styles.formRight}>
          <img src="/src/assets/login.avif" alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
