import React from 'react';

const Tweet = ({ tweet }) => {
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

export default Tweet;