import React from 'react';

//Styled-Components
import { Wrapper, Content, Text } from './HeroImage.styles';

//Components
export const HeroImage = ({ image, title, text }) => (
	<Wrapper image={image}>
		<Content>
			<Text>
				<h1>{title}</h1>
				<p>{text}</p>
			</Text>
		</Content>
	</Wrapper>
);
