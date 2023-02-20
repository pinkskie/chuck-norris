import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { chuckNorrisApi } from "./chuck-norris.api";
import favoritesSlice from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    [chuckNorrisApi.reducerPath]: chuckNorrisApi.reducer,
    favorites: favoritesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chuckNorrisApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
