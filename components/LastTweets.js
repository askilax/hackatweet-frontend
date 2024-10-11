import React from 'react';
import styles from '../styles/LastTweets.module.css';
import { useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/fr';
import { FaHeart, FaTrash } from 'react-icons/fa'; // Importer des icônes
moment.locale('fr');

const LastTweets = () => {
    const firstName = useSelector((state) => state.user.firstName);
    const userName = useSelector((state) => state.user.userName);
    const allTweets = useSelector((state) => state.tweets.value.allTweets || []);
    
    // Trier les tweets par date (du plus récent au plus ancien)
    const sortedTweets = [...allTweets].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return (
        <div className={styles.tweetsList}>
            {sortedTweets.length > 0 ? (
                sortedTweets.map((tweet) => (
                    <div key={tweet.id} className={styles.tweet}>
                        {/* Informations utilisateur */}
                        <div className={styles.userInfo}>
                            <img src='./profil.jpg' alt="avatar" className={styles.imgProfil} />
                            <div>
                                <p className={styles.name}>{firstName || 'John'}</p>
                                <p className={styles.username}>{userName || '@John'}</p>
                                <p className={styles.date}>· {moment(tweet.timestamp).fromNow()}</p>
                            </div>
                        </div>
                        {/* Contenu du tweet */}
                        <p className={styles.content}>{tweet.content}</p>
                        {/* Section des icônes (cœur et corbeille) */}
                        <div className={styles.actions}>
                            <FaHeart className={styles.iconHeart} /> {/* Icône de cœur */}
                            <FaTrash className={styles.iconTrash} /> {/* Icône de corbeille */}
                        </div>
                    </div>
                ))
            ) : (
                <p className={styles.noTweets}>Aucun tweet pour le moment</p>
            )}
        </div>
    );
};

export default LastTweets;
