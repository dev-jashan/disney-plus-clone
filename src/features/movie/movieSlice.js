import { createSlice } from "@reduxjs/toolkit";

// this is the initail store looks like
const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
};

// creating movie slice redux
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

// exporting the methods to be used by other component

export const { setMovie } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
