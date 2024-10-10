
import { createSlice } from '@reduxjs/toolkit';

const tweetSlice = createSlice({
  name: 'tweets',
  initialState: {
    allTweets: [],  // Tableau vid pour tous les tweets
    filteredTweets: [],  // tweets qui ressortent en fonction du hashtag
    loading: false,
    error: null,
  },
  reducers: {
    setTweets: (state, action) => {
      state.allTweets = action.payload;
    },
    filterTweetsByHashtag: (state, action) => {
      const hashtag = action.payload;
      state.filteredTweets = state.allTweets.filter(tweet =>
        tweet.content.includes(`#${hashtag}`)
      );
    },
    clearFilteredTweets: (state) => {
      state.filteredTweets = [];
    },
  },
});

export const { setTweets, filterTweetsByHashtag, clearFilteredTweets } = tweetSlice.actions;
export default tweetSlice.reducer;
