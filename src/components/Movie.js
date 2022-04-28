import React from 'react';
import { useParams } from 'react-router-dom';
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//COMPONENTS
import { Grid } from './Grid';
import Spinner from './Spinner';
import { BreadCrumb } from './BreadCrumb';
import { MovieInfo } from './MovieInfo';

//Hook
import { useMoviesFetch } from '../Hooks/useMoviesFetch';
//Image
import NoImage from '../Images/noimage.jpg';
import { MovieInfoBar } from './MovieInfoBar';
import { Actor } from './Actor';

//
export const Movie = () => {
	const { movieId } = useParams();

	const { state: movie, loading, Error } = useMoviesFetch(movieId);

	if (loading) return <Spinner />;
	if (Error) return <div>Nothing to load...</div>;

	return (
		<React.Fragment>
			<BreadCrumb movieTitle={movie.original_title} />
			<MovieInfo movie={movie} />
			<MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
			<Grid header="Actors">
				{movie.actors.map((actor) => (
					<Actor
						key={actor.credit_id}
						name={actor.name}
						character={actor.character}
						imageurl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage}
					/>
				))}
			</Grid>
		</React.Fragment>
	);
};
