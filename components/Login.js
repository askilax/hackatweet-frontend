import React, { useState } from "react";
import styles from '../styles/Login.module.css';
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleOpenModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="login-container">
      <h1>See what's happening</h1>
      <p>Join Hackatweet today.</p>
      <button onClick={() => handleOpenModal("signup")}>Sign up</button>
      <button onClick={() => handleOpenModal("signin")}>Sign in</button>

      {isModalOpen && modalType === "signup" && <SignUp closeModal={handleCloseModal} />}
      {isModalOpen && modalType === "signin" && <SignIn closeModal={handleCloseModal} />}
    </div>
  );
}

export default Login;
