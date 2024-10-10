import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div><main className={styles.main}>
      <div className={styles.containerHome}>
        containerHome
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
