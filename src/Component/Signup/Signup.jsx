import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Signup.module.css';

const Signup = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); 
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && name) {
      setIsLoggedIn(true);  
      navigate("/landing");  
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div className={styles.backContainer}>
      <div className={styles.formContainer}>
        <div className={styles.formLeft}>
          <h4>Signup</h4>
          <p className={styles.p1}>Already have an account? <a href="#" onClick={() => navigate("/login")}>Login here</a></p>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

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

            <button className={styles.button1} type="submit">Submit</button>
          </form>
        </div>

        <div className={styles.formRight}>
          <img src="/src/assets/sign.up img.avif" alt="Signup" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
