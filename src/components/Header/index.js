import React from 'react';

//Routing
import { Link } from 'react-router-dom';

import TMDBLogo from '../../Images/TMDBLogo.png';
import RMDBLogo from '../../Images/RMDBLogo.png';

import { Wrapper, Content, LogoImg, RMDBLogoImg } from './Header.styles';

const Header = () => (
	<Wrapper>
		<Content>
			<Link to="/">
				<RMDBLogoImg src={RMDBLogo} alt="rmdb-logo" />
			</Link>
			<h1>Movie Mania Flix</h1>
			<LogoImg src={TMDBLogo} alt="tmdb-logo" />
		</Content>
	</Wrapper>
);

export default Header;
