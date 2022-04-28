import styled from 'styled-components';

export const Wrapper = styled.div`
	background: var(--tertiary);
	padding: 0 20px;
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: var(--maxwidth);
	padding: 20px 0;
	margin: 0 auto;
`;

export const RMDBLogoImg = styled.img`
	width: 80px;
	height: 100%;
	filter: invert(1);

	@media screen and (max-width: 620px) {
		width: 60px;
	}
`;

export const LogoImg = styled.img`
	width: 80px;
	height: 100%;
	@media screen and (max-width: 620px) {
		width: 60px;
	}
`;
