import React from 'react';

//Style component
import { Wrapper, Content } from './Grid.styles';

//function component
export const Grid = ({ header, children }) => (
	<Wrapper>
		<h1>{header}</h1>
		<Content>{children}</Content>
	</Wrapper>
);
