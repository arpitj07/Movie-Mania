import styled from 'styled-components';

export const Wrapper = styled.div`
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, 0.65) 100%), url(${({ image }) => image}),
		var(--tertiary);

	background-position: center;
	/* background-repeat: no-repeat; */
	background-size: 100% cover;
	height: 600px;
	position: relative;
	animation: animateHeroImage 1s;

	@keyframes animateHeroImage {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const Content = styled.div`
	padding: 20px;
	max-width: var(--maxwidth);
	margin: 0 auto;
`;

export const Text = styled.div`
	z-index: 100;
	max-width: 700px;
	position: absolute;
	bottom: 40px;
	margin-right: 20px;
	min-height: 100px;
	color: var(--white);

	h1 {
		font-size: var(--fontBigSize);

		@media screen and (max-width: 620px) {
			font-size: var(--fontBig);
		}
	}

	p {
		font-size: var(--fontMed);

		@media screen and (max-width: 620px) {
			font-size: var(--fontSmall);
		}
	}

	@media screen and (max-width: 620px) {
		max-width: 100%;
	}
`;
