import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div><main className={styles.main}>
      <div className={styles.containerHome}>
        <div className={styles.containerMenu}>
        <img src='./logotweeter.png' className={styles.imgProfil}></img>
          <ul>
            <li>Accueil</li>
            <li>Explorer</li>
            <li>Notifications</li>
            <li>Messages</li>
            <li>Signets</li>
            <li>Listes</li>
            <li>Profil</li>
            <li>Plus</li>
            <button>Tweeter</button>
          </ul>
        </div>
        <div className={styles.containerProfil}>
          <img src='./profil.jpg' className={styles.imgProfil}></img>
        </div>
      </div>
      <div className={styles.containerTweetAndLast}>
        <div className={styles.containerTweet}>
          containerTweet
        </div>
        <div className={styles.containerLastTweets}>
          containerLastTweets
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
