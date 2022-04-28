import React, { useState, useEffect, useRef } from 'react';

// styles
import { Wrapper, Content, Searchicon } from './SearchBar.styles';

export const SearchBar = ({ setSearchTerm }) => {
	const [ state, setState ] = useState('');
	const initial = useRef(true);

	useEffect(
		() => {
			if (initial.current) {
				initial.current = false;
				return;
			}
			const timer = setTimeout(() => {
				setSearchTerm(state);
			}, 500);
			return () => clearInterval(timer);
		},
		[ setSearchTerm, state ]
	);

	return (
		<Wrapper>
			<Content>
				<Searchicon />
				<input
					type="text"
					placeholder="Search Movie"
					onChange={(e) => setState(e.currentTarget.value)}
					value={state}
				/>
			</Content>
		</Wrapper>
	);
};
