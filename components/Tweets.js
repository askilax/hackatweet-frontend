import styles from '../styles/Tweets.module.css';
import React from 'react';
import { useState } from 'react';

function Tweets() {
  const [value, SetValue] = useState('')
  const maxLength = 280;

  const handleChange = (e) => {
    if (e.target.value.length < maxLength) {
      SetValue(e.target.value);
    }
  }

  return (
    <div className={styles.containerTweets}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Home
        </h1>
        <div>
          <input className={styles.textHome} type='text' placeholder="What's up" maxLength={maxLength} onChange={handleChange} />
          <span>{value.length}/{maxLength}</span>
        </div>
      </main>
    </div>
  );
}

export default Tweets;