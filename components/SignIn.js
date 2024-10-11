import React, { useState } from "react";
import styles from '../styles/Signin.module.css';
import { useDispatch } from "react-redux";
import { setUserData } from "../reducers/user";

function SignIn({ closeModal }) {
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    const data = await response.json()
    console.log(data);
    
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
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className={styles.SignUp}>
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
        <button type="submit" className={styles.btn}>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
