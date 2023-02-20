import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IJoke } from "./types";

export const chuckNorrisApi = createApi({
  reducerPath: "chuck-norris/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.chucknorris.io/",
  }),
  endpoints: (build) => ({
    getRandomJoke: build.query<IJoke, void>({
      query: () => "jokes/random",
      transformResponse: (response: IJoke) => response || [],
    }),
  }),
});

export const { useLazyGetRandomJokeQuery } = chuckNorrisApi;
