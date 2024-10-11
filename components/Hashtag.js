import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTweetsByHashtag, setTweets } from '../reducers/tweets'; 
import Tweets from '../components/Tweets'; 
import Trends from '../components/Trends';  
import { useRouter } from 'next/router'; 

const Hashtag = () => {
  const router = useRouter();
  const { hashtag } = router.query; 
  const [search, setSearch] = useState(hashtag || '');
  
  const allTweets = useSelector((state) => state.tweets.value.allTweets); 
  const filteredTweets = useSelector((state) => state.tweets.value.filteredTweets); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (allTweets.length === 0) {
      fetchAllTweets();
    }

    if (hashtag) {
      dispatch(filterTweetsByHashtag(hashtag));
      setSearch(hashtag);
    }
  }, [hashtag, dispatch]);

  const fetchAllTweets = async () => {
    try {
      const res = await fetch(`/${hashtag}`); 
      const data = await res.json();
      dispatch(setTweets(data.tweets || [])); 
    } catch (error) {
      console.error('Error fetching all tweets:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/hashtag/${search}`); 
    }
  };

 
  const trends = ['hackatweet', 'first', 'cenation']; 

  return (
    <div className="hashtag-page">
      {/* barre de recherch */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search hashtags"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Liste des tweets */}
      <div className="tweet-list">
        {filteredTweets.length > 0 ? (
          filteredTweets.map((tweet) => <Tweets key={tweet.id} tweet={tweet} />)
        ) : (
          <p>No tweets found with #{search}</p>
        )}
      </div>

      {/* section de droite pour les tendances */}
      <div>
      <Trends trends={trends} /> 
      </div>
    </div>
  );
};

export default Hashtag;
