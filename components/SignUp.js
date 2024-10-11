import React, { useState } from "react";
import styles from '../styles/SignUp.module.css';
import { useDispatch } from "react-redux";
import { setUserData } from "../reducers/user";


function SignUp({ closeModal }) {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({ userName: "", password: "" });


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    const data = await response.json()
    if (data.token) {
      const userData = {
        token: data.token,
        firstName: data.firstName,
        userName: data.userName,
      };
      dispatch(setUserData(userData))
      window.location.href = "/Home";
    }
  }

  return (
    <div className="modal">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className={styles.SignUp}>
        <input
          type="text"
          name="firstName"
          placeholder="Firstname"
          onChange={handleInputChange}
          className={styles.input}
        />
        <input
          type="text"
          name="userName"
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
