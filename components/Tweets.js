import styles from '../styles/Tweets.module.css';
import React from 'react';
import { useState } from 'react';
import LastTweets from './LastTweets';


function Tweets({ addTweet }) {
  const [value, setValue] = useState('');
  const maxLength = 280;

  const handleChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setValue(e.target.value);
    }
  };

  const handleTweet = () => {
    if (value.trim() !== '') {
      addTweet(value);
      setValue('');
    }
  };

  return (
    <div className={styles.containerTweets}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Home
        </h1>
        <div className={styles.Input}>
          <input className={styles.textHome}
            type='text'
            placeholder="What's up"
            maxLength={maxLength}
            value={value}
            onChange={handleChange} />
        </div>
        <div className={styles.pBtn}>
          <p className={styles.p}>{value.length}/{maxLength}</p>
          <button type='button' className={styles.btn1} onClick={handleTweet}>Tweet</button>
        </div>
      </main>
    </div>
  );
}

export default Tweets;