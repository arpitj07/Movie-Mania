import styled from 'styled-components';

export const Image = styled.img`
	width: 100%;
	max-width: 720px;
	transition: all 0.3s;
	object-fit: cover;
	border-radius: 20px;
	border: 5px solid var(--white);
	animation: animateThumb 0.4s;

	:hover {
		transform: scale(1.15) translateZ(20px);
		opacity: 0.8;
	}
	@keyframes animateThumb {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;
