import React from 'react';

//config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';

//Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';

//components
import { HeroImage } from './HeroImage';
import { SearchBar } from './SearchBar';
import { Grid } from './Grid';
import { Thumb } from './Thumb';
import Spinner from './Spinner';
import { Button } from './Button';

//image
import NoImage from '../Images/noimage.jpg';

export const Home = () => {
	const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();

	if (error) return <div>Something Went Wrong...</div>;

	return (
		<React.Fragment>
			{!searchTerm && state.results[0] ? (
				<HeroImage
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
					title={state.results[0].original_title}
					text={state.results[0].overview}
				/>
			) : null}

			<SearchBar setSearchTerm={setSearchTerm} />

			<Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
				{state.results.map((movie) => (
					<Thumb
						key={movie.id}
						clickable
						image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
						movieId={movie.id}
					/>
				))}
			</Grid>
			{loading && <Spinner />}
			{state.page < state.total_pages &&
			!loading && <Button text="Load More" callback={() => setIsLoadingMore(true)} />}
		</React.Fragment>
	);
};
