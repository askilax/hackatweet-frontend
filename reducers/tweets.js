import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { 
    allTweets: [],  // Tableau vide pour tous les tweets
    filteredTweets: [],  // Tweets qui ressortent en fonction du hashtag
    loading: false,
    error: null, 
  },
};

const tweetSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    setTweets: (state, action) => {
      state.value.allTweets = action.payload;
    },
    filterTweetsByHashtag: (state, action) => {
      const hashtag = action.payload;
      state.value.filteredTweets = state.value.allTweets.filter(tweet =>
        tweet.content.includes(`#${hashtag}`)
      );
    },
    clearFilteredTweets: (state) => {
      state.value.filteredTweets = [];
    },
    deleteTweet: (state, action) => {
      // Supprimer le tweet dont l'id correspond à action.payload
      state.value.allTweets = state.value.allTweets.filter(tweet => tweet.id !== action.payload);
      // Si les tweets filtrés contiennent le tweet à supprimer, il faut aussi le retirer
      state.value.filteredTweets = state.value.filteredTweets.filter(tweet => tweet.id !== action.payload);
    },
  },
});

export const { setTweets, filterTweetsByHashtag, clearFilteredTweets, deleteTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
