import styles from '../styles/LastTweets.module.css';

const LastTweets = ({ tweet }) => {
    return (
        // <div className="tweet">
        //   <div className="user-info">
        //      <img src={tweet.user.avatar} alt="avatar" />
        //     <span>{tweet.user.name} @{tweet.user.handle}</span>
        //   </div>
        //    <p>{tweet.content}</p> 
        // </div>
        <div className={styles.tweet}>
            <div className="user-info">
                <img src='./profil.jpg' alt="avatar" className={styles.imgProfil} />
                <span className={styles.name}>name</span>
                <span className={styles.username}>@username</span>
                <span className={styles.data}> . data</span>
            </div>
            <p className={styles.p}>Le monde évolue rapidement avec la technologie. Chaque jour, de nouvelles innovations transforment notre façon de vivre, de communiquer et de travailler. Dans ce contexte, il est essentiel de rester informé et d'apprendre en continu pour s'adapter et tirer parti des opportunités que cela offre.</p>
        </div>
    );
};


export default LastTweets;
