import React, { useState } from "react";
import styles from '../styles/Signin.module.css';

function SignIn({ closeModal }) {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "/Home";
    }
  };

  return (
    <div className="modal">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className={styles.SignUp}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          className={styles.input}
        />
        <button type="submit" className={styles.btn}>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
