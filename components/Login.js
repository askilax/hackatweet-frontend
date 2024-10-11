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
      <div className={styles.backgroundlogin}>
        <img src='./logotweeter.png' className={styles.imgBackground} alt="Background" />
      </div>
      <div className={styles.logincontainer}>
        <div className={styles.containerLogo}>
          <img src='./logotweeter.png' className={styles.imgLogo} alt="Logo" />
        </div>
        <div className={styles.containerTitle}>
          <h1>See what's</h1>
          <h2 className={styles.h1Like}>happening</h2>
        </div>
        <div className={styles.containerButton}>
          <p className={styles.pSignup}>Join Hackatweet today.</p>
          <button onClick={() => handleOpenModal("signup")} className={styles.buttonsignup}>Sign up</button>
          <p className={styles.pSignin}>Already have an account?</p>
          <button onClick={() => handleOpenModal("signin")} className={styles.buttonsignin}>Sign in</button>
        </div>

        {isModalOpen && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <span className={styles.close} onClick={handleCloseModal}>&times;</span>
              {modalType === "signup" && <SignUp closeModal={handleCloseModal} />}
              {modalType === "signin" && <SignIn closeModal={handleCloseModal} />}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Login;