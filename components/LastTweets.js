import React, { useState } from 'react';
import styles from '../styles/LastTweets.module.css';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import 'moment/locale/fr';
import { FaHeart, FaTrash } from 'react-icons/fa'; // Importer des icônes
moment.locale('fr');

const LastTweets = () => {
    const dispatch = useDispatch(); 
    const firstName = useSelector((state) => state.user.firstName);
    const userName = useSelector((state) => state.user.userName);
    const allTweets = useSelector((state) => state.tweets.value.allTweets || []);

    // Trier les tweets par date (du plus récent au plus ancien)
    const sortedTweets = [...allTweets].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    // Fonction pour supprimer un tweet
    const handleDeleteTweet = (id) => {
        console.log('Deleting tweet with id:', id); // Vérifie si l'id est correct
        dispatch({
            type: 'tweets/deleteTweet',
            payload: id
        });
    };

    return (
        <div className={styles.tweetsList}>
            {sortedTweets.length > 0 ? (
                sortedTweets.map((tweet) => (
                    <Tweet
                        key={tweet.id}
                        tweet={tweet}
                        firstName={firstName}
                        userName={userName}
                        onDelete={() => handleDeleteTweet(tweet.id)} 
                    />
                ))
            ) : (
                <p className={styles.noTweets}>Aucun tweet pour le moment</p>
            )}
        </div>
    );
};

const Tweet = ({ tweet, firstName, userName, onDelete }) => {
    const [likes, setLikes] = useState(0);

    const handleLikeClick = () => {
        setLikes(likes + 1); 
    };

    return (
        <div className={styles.tweet}>
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
            <p className={styles.content}>{tweet.text}</p>

            {/* Section des icônes (cœur et corbeille) */}
            <div className={styles.actions}>
                <FaHeart className={styles.iconHeart} onClick={handleLikeClick} /> {/* Incrémente les likes */}
                <span>{likes}</span>
                <FaTrash className={styles.iconTrash} onClick={onDelete} /> {/* Gère la suppression */}
            </div>
        </div>
    );
};

export default LastTweets;
