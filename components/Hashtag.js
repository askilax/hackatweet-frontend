import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTweetsByHashtag } from './tweetSlice';
import Tweet from './Tweet';

const Hashtag = () => {
  const [search, setSearch] = useState('');
  const filteredTweets = useSelector((state) => state.tweets.filteredTweets);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(filterTweetsByHashtag(search));
  };

  return (
    <div className="hashtag-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search hashtags"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="tweet-list">
        {filteredTweets.length > 0 ? (
          filteredTweets.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
        ) : (
          <p>No tweets found with #{search}</p>
        )}
      </div>
    </div>
  );
};

export default Hashtag;
