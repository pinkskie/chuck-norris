import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IJoke } from "./types";
import { RootState } from ".";

const STORE_KEY = "favorites";

const initialState: IJoke[] = JSON.parse(
  localStorage.getItem(STORE_KEY) || "[]"
);

export const favoritesSlice = createSlice({
  name: STORE_KEY,
  initialState,
  reducers: {
    toggleJoke: (state, action: PayloadAction<IJoke>) => {
      const isFavorite = state.some((el) => el.id === action.payload.id);

      if (isFavorite) {
        state.splice(
          state.findIndex((el) => el.id === action.payload.id),
          1
        );
      } else {
        if (state.length >= 10) {
          state.shift();
        }
        state.push(action.payload);
      }

      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    },
    clearJokes: (state) => {
      state = state.splice(0, state.length);
      localStorage.removeItem(STORE_KEY);
    },
  },
});

export const { toggleJoke, clearJokes } = favoritesSlice.actions;

export const isFavorite = (joke: IJoke) => (state: RootState) =>
  state.favorites.some((el) => el.id === joke.id);

export const countOfFav = (state: RootState) => state.favorites.length;

export default favoritesSlice.reducer;
