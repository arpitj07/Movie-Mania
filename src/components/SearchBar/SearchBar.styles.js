import styled from 'styled-components';

//icons
import { GoSearch } from 'react-icons/go';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100px;
	background: var(--tertiary);
	padding: 0 20px;
`;

export const Content = styled.div`
	position: relative;
	max-width: var(--maxwidth);
	width: 100%;
	height: 55px;
	background: var(--secondary);
	margin: 0 auto;
	border-radius: 40px;
	color: var(--white);

	input {
		font-size: 28px;
		position: absolute;
		left: 0;
		margin: 8px 0;
		padding: 0 0 0 60px;
		border: None;
		width: 100%;
		height: 40px;
		background: transparent;
		color: var(--white);
		outline: None;
	}
	input::placeholder {
		color: var(--white);
	}
`;

export const Searchicon = styled(GoSearch)`
	position: absolute;
	left: 15px;
	top: 14px;
	width: 30px;
	height: 30px;
`;
