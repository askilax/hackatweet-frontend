import React, { useState } from "react";
import styles from '../styles/SignUp.module.css';

function SignUp({ closeModal }) {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        if (data.token) {
          localStorage.setItem("token", data.token);
          window.location.href = "/Home";
        }
      })
  };

  return (
    <div className="modal">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className={styles.SignUp}>
        <input
        type="text"
        name="firstname"
        placeholder="Firstname"
        onChange={handleInputChange}
        className={styles.input}
      />
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
        <button type="submit" className={styles.btn}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
