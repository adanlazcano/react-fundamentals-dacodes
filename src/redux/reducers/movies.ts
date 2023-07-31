import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IMovies {
  searchMovies: {
    id: string;
    title: string;
  };
  pages:{
    page:number,
    total_pages:number,
    total_results:number
  }

  genres:[]

}

const initialState: IMovies = {
  searchMovies: { id: "now_playing", title: "Now playing" },
  pages:{
    page:1,
    total_pages:0,
    total_results:0
  },
  genres:[]
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setGenres: (state, action) => {

     
      return {
        ...state,
        genres: action.payload,
      };
    },
    setSearchMovies: (state, action) => {
      return {
        ...state,
        searchMovies: action.payload,
      };
    },
    setPages: (state, action) => {
      return {
        ...state,
        pages: action.payload,
      };
    },
    countPage: (state, action) => {
      return {
        ...state,
        pages: {...state.pages,page:action.payload},
      };
    },
  },
});

export const moviesSelector = (state: RootState) => state.movies;

export const { setGenres,setSearchMovies,setPages,countPage} = moviesSlice.actions;

export default moviesSlice.reducer;
