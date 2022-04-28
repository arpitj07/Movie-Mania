import React from 'react';

//styles
import { Wrapper, Image } from './Actor.styles';

export const Actor = ({ name, character, imageurl }) => (
	<Wrapper>
		<Image src={imageurl} alt="image-thumb" />
		<h3>{name}</h3>
		<p>{character}</p>
	</Wrapper>
);
