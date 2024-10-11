import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: { allTweets: [],  // Tableau vid pour tous les tweets
    filteredTweets: [],  // tweets qui ressortent en fonction du hashtag
    loading: false,
    error: null, },
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
  },
});

export const { setTweets, filterTweetsByHashtag, clearFilteredTweets } = tweetSlice.actions;
export default tweetSlice.reducer;
