import styles from '../styles/Tweets.module.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTweets } from '../reducers/tweets';

function Tweets({ addTweet }) {
  const dispatch = useDispatch();
  const allTweets = useSelector((state) => state.tweets.value.allTweets);
  const [value, setValue] = useState('');
  const maxLength = 280;

  const handleChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setValue(e.target.value);
    }
  };

  const handleTweet = () => {
    if (value.trim() !== '') {
      const newTweet = {
        id: Date.now(),
        content: value,
        timestamp: new Date().toISOString(),
      };
      dispatch(setTweets([...allTweets, newTweet]));
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