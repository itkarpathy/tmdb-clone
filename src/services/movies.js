// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
	reducerPath: 'moviesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://api.themoviedb.org/3/search/movie?
		api_key=f6f869bdbe9f5928b68c55d9cdd34333&query={}
	` }),
	endpoints: (builder) => ({
		getMoviesByName: builder.query({
			query: (query) => `/${query}`,
		}),
	}),
})
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesByNameQuery } = moviesApi
