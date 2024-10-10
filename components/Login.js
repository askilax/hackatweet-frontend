import React, { useState } from "react";
import styles from '../styles/Login.module.css';
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Image from 'next/image';

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
    <div className={styles.logincontainer}>
        <div><Image src={props.urlToImage} alt={props.title} width={600} height={314} /></div>
      <h1>See what's happening</h1>
      <p>Join Hackatweet today.</p>
      <button onClick={() => handleOpenModal("signup")} className={styles.button}>Sign up</button>
      <button onClick={() => handleOpenModal("signin")} className={styles.button}>Sign in</button>

      {isModalOpen && modalType === "signup" && <SignUp closeModal={handleCloseModal} />}
      {isModalOpen && modalType === "signin" && <SignIn closeModal={handleCloseModal} />}
    </div>
  );
}

export default Login;
