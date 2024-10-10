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
    <main className={styles.main}>
        <div className={styles.backgroundlogin}></div>
        <div className={styles.backgroundlogo}></div>
    <div className={styles.logincontainer}>
      <h1>See what's happening</h1>
      <p>Join Hackatweet today.</p>
      <button onClick={() => handleOpenModal("signup")} className={styles.button}>Sign up</button>
      <button onClick={() => handleOpenModal("signin")} className={styles.button}>Sign in</button>

      {isModalOpen && modalType === "signup" && <SignUp closeModal={handleCloseModal} />}
      {isModalOpen && modalType === "signin" && <SignIn closeModal={handleCloseModal} />}
    </div>
     </main>
  );
}

export default Login;
