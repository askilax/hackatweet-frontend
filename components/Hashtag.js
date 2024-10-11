import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTweetsByHashtag } from '../reducers/Tweet'; 
import Tweets from '../components/Tweets'; 
import { useRouter } from 'next/router'; 

const Hashtag = () => {
  const router = useRouter();
  const { hashtag } = router.query; // Récupérer le hashtag depuis l'URL
  const [search, setSearch] = useState(hashtag || ''); // Initialiser avec le hashtag de l'URL s'il existe
  const filteredTweets = useSelector((state) => state.Tweet.filteredTweets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (hashtag) {
      // Filtrer les tweets dès que l'URL change
      dispatch(filterTweetsByHashtag(hashtag));
      setSearch(hashtag); // Mettre à jour le champ de recherche avec l'ID de l'URL
    }
  }, [dispatch, hashtag]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      // Rediriger vers une nouvelle URL en modifiant le paramètre dynamique "hashtag"
      router.push(`/hashtag/${search}`);
    }
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
          filteredTweets.map((tweet) => <Tweets key={tweet.id} tweet={tweet} />)
        ) : (
          <p>No tweets found with #{search}</p>
        )}
      </div>
    </div>
  );
};

export default Hashtag;
