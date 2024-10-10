import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets';
import Tweets from './Tweets';




function Home() {
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
            <p className={styles.name}>John</p>
            <p className={styles.username}>@John</p>
          </div>
        </div>
      </div>
      <div className={styles.containerTweetAndLast}>
        <div className={styles.containerTweet}>
          <Tweets />
        </div>
        <div className={styles.containerLastTweets}>
          <LastTweets />
          <LastTweets />
          <LastTweets />
        </div>
      </div>
      <div className={styles.containerTrends}>
        containerTrends
      </div>
    </main>
    </div>

  );
}
export default Home;
