import styles from '../styles/LastTweets.module.css';

const LastTweets = ({ tweet }) => {
  return (
    <div className="tweet">
      <div className="user-info">
        <img src={tweet.user.avatar} alt="avatar" />
        <span>{tweet.user.name} @{tweet.user.handle}</span>
      </div>
      <p>{tweet.content}</p>
    </div>
  );
};


export default LastTweets;
