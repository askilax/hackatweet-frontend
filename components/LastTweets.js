import React from 'react';
import styles from '../styles/LastTweets.module.css';
import { useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');


const LastTweets = ({ tweets }) => {
    const firstName = useSelector((state) => state.user.firstName);
    const userName = useSelector((state) => state.user.userName);
    const allTweets = useSelector((state) => state.tweets.value.allTweets || []);
    const filteredTweets = useSelector((state) => state.tweets.value.filteredTweets);

    const sortedTweets = [...allTweets].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return (
        <div className={styles.tweetsList}>
           {sortedTweets.length > 0 ? (
        sortedTweets.map((tweet) => (
          <div key={tweet.id} className={styles.tweet}>
            <div className={styles.userInfo}>
              <img src='./profil.jpg' alt="avatar" className={styles.imgProfil} />
              <p className={styles.name}>{firstName || 'John'}</p>
              <p className={styles.username}>{userName || '@John'}</p>
              <p className={styles.date}>. {moment(tweet.timestamp).fromNow()}</p>
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