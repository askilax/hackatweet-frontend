import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTweetsByHashtag } from '../reducers/tweets';

const Trends = ({ trends }) => {
  const dispatch = useDispatch();
  const hashtags = useSelector((state) => state.tweets.value.hashtags);

  const handleClick = (hashtag) => {
    dispatch(filterTweetsByHashtag(hashtag));
  };

  return (
    <div className="trends">
      <h3>Trends</h3>
      <ul>
        {trends.map((trend) => (
          <li key={trend} onClick={() => handleClick(trend)}>
            #{trend}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trends;
