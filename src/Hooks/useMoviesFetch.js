import { useEffect, useState } from 'react';

import { APIs } from '../API';

export const useMoviesFetch = (movieId) => {
	const [ state, setState ] = useState({});
	const [ loading, setloading ] = useState(true);
	const [ Error, setError ] = useState(false);

	useEffect(
		() => {
			const fetchMovie = async () => {
				try {
					setloading(true);
					setError(false);

					const movie = await APIs.fetchmovie(movieId);
					const credits = await APIs.fetchcredits(movieId);

					const directors = credits.crew.filter((member) => member.job === 'Director');

					setState({
						...movie,
						actors: credits.cast,
						directors
					});

					setloading(false);
				} catch (error) {
					setError(true);
				}
			};
			fetchMovie();
		},
		[ movieId ]
	);

	return { state, loading, Error };
};
