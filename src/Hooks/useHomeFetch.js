import { useState, useEffect } from 'react';
import { APIs } from '../API';

//initial state
const initialState = {
	pages: 0,
	results: [],
	total_pages: 0,
	total_results: 0
};

export const useHomeFetch = () => {
	const [ searchTerm, setSearchTerm ] = useState('');
	const [ state, setState ] = useState(initialState);
	const [ error, setError ] = useState(false);
	const [ loading, setLoading ] = useState(false);
	const [ isLoadingMore, setIsLoadingMore ] = useState(false);

	const fetchMovies = async (page, searchTerm = '') => {
		try {
			setError(false);
			setLoading(true);

			const movies = await APIs.fetchMovies(searchTerm, page);

			//putting data in STATE. set STATE using callback function.
			//callback function will be called with PREV STATE.
			// Always use setter to change the STATE and not directly [mutate the state].

			setState((prev) => ({
				// setState --> merge the object while USESTATE hook doesnt merge/update the object.

				...movies,
				results: page > 1 ? [ ...prev.results, ...movies.results ] : [ ...movies.results ]
			}));
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	};

	//Initial and Search
	useEffect(
		() => {
			setState(initialState);
			fetchMovies(1, searchTerm);
		},
		[ searchTerm ]
	);

	useEffect(
		() => {
			if (!isLoadingMore) return;
			fetchMovies(state.page + 1, searchTerm);
			setIsLoadingMore(false);
		},
		[ isLoadingMore, searchTerm, state.page ]
	);

	return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
