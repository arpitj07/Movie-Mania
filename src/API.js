import {
	POPULAR_BASE_URL,
	SEARCH_BASE_URL,
	IMAGE_BASE_URL,
	BACKDROP_SIZE,
	POSTER_SIZE,
	API_KEY,
	API_URL,
	REQUEST_TOKEN_URL,
	SESSION_ID_URL,
	LOGIN_URL
} from './config';

export const APIs = {
	fetchMovies: async (searchTerm, page) => {
		const endpoint = searchTerm
			? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
			: `${POPULAR_BASE_URL}&page=${page}`;

		return await (await fetch(endpoint)).json();
	},

	fetchmovie: async (movieID) => {
		const endpoint = `${API_URL}movie/${movieID}?api_key=${API_KEY}`;

		return await (await fetch(endpoint)).json();
	},

	fetchcredits: async (movieID) => {
		const creditEndPoint = `${API_URL}movie/${movieID}/credits?api_key=${API_KEY}`;

		return await (await fetch(creditEndPoint)).json();
	}
};
