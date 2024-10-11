import styles from '../styles/LastTweets.module.css';
import { useSelector } from 'react-redux';

const LastTweets = ({ tweet }) => {
    const firstName = useSelector((state) => state.user.firstName);
    const userName = useSelector((state) => state.user.userName);

    return (
        <div className={styles.tweet}>
        <div className={styles.userInfo}>
                <img src='./profil.jpg' alt="avatar" className={styles.imgProfil} />
                <p className={styles.name}>{firstName || John}</p>
                <p className={styles.username}>{userName || '@John'}</p>
                <p className={styles.data}> . il y a 15 minute</p>
            </div>
            <p className={styles.p}>Le monde évolue rapidement avec la technologie. Chaque jour, de nouvelles innovations transforment notre façon de vivre, de communiquer et de travailler. Dans ce contexte, il est essentiel de rester informé et d'apprendre en continu pour s'adapter et tirer parti des opportunités que cela offre.</p>
        </div>
    );
};


export default LastTweets;
