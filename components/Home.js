import{ useState } from 'react';
import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets';
import Tweets from './Tweets';
import { useSelector } from 'react-redux';




function Home() {
    const firstName = useSelector((state) => state.user.firstName);
    const userName = useSelector((state) => state.user.userName);

    const addTweet = (content) => {
      const newTweet = {
        id: Date.now(),
        content,
        timestamp: new Date().toISOString(),
      };
      setTweets([newTweet, ...tweets]);
    };


  return (
    <div><main className={styles.main}>
      <div className={styles.containerHome}>
        <div className={styles.containerMenu}>
          <img src='./logotweeter.png' className={styles.imgLogo}></img>
          <ul className={styles.menu}>
            <li className={styles.menuLi}>Accueil</li>
            <li className={styles.menuLi}>Explorer</li>
            <li className={styles.menuLi}>Notifications</li>
            <li className={styles.menuLi}>Messages</li>
            <li className={styles.menuLi}>Signets</li>
            <li className={styles.menuLi}>Listes</li>
            <li className={styles.menuLi}>Profil</li>
            <li className={styles.menuLi}>Plus</li>
            <button className={styles.btn1}>Tweeter</button>
          </ul>
        </div>
        <div className={styles.containerProfil}>
          <img src='./profil.jpg' className={styles.imgProfil}></img>
          <div className={styles.containerP}>
            <p className={styles.name}>{firstName || 'John'}</p>
            <p className={styles.username}>{userName || '@john'}</p>
          </div>
        </div>
      </div>
      <div className={styles.containerTweetAndLast}>
        <div className={styles.containerTweet}>
        <Tweets addTweet={addTweet} />
        </div>
        <div className={styles.containerLastTweets}>
        <LastTweets />
        </div>
      </div>
      <div className={styles.containerTrends}>
        <trends />
      </div>
    </main>
    </div>

  );
}
export default Home;
