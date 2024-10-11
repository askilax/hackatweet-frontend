import React from 'react';
import styles from '../styles/LastTweets.module.css';
import { useSelector } from 'react-redux';

const LastTweets = ({ tweets }) => {
    const firstName = useSelector((state) => state.user.firstName);
    const userName = useSelector((state) => state.user.userName);
  
    return (
      <div className={styles.tweetsList}>
        {tweets.length > 0 ? (
          tweets.map((tweet) => (
            <div key={tweet.id} className={styles.tweet}>
              <div className={styles.userInfo}>
                <img src='./profil.jpg' alt="avatar" className={styles.imgProfil} />
                <p className={styles.name}>{firstName || 'John'}</p>
                <p className={styles.username}>{userName || '@John'}</p>
                <p className={styles.date}> . {tweet.timestamp}</p>
              </div>
              <p className={styles.content}>{tweet.content}</p>
            </div>
          ))
        ) : (
          <p className={styles.noTweets}>Aucun tweet pour le moment</p>
        )}
      </div>
    );
  };
  
  export default LastTweets;
