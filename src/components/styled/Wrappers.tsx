import styled from 'styled-components';
import Meat from "../../assets/img/meat-2.jpeg"

export const ContactInfoWrapper = styled.article`
	display: flex;
	justify-content: left;
	flex-direction: column;
	gap: 10px;
	font-family: Montserrat, sans-serif;
	font-weight: 100;
`;

export const InfoDetailsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const InfoTimeWrapper = styled.div`
	width: 20%;
	display: flex;
	justify-content: space-between;
`;

export const Wrapper = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;

	@media (min-width: 700px) {
	}
`;

export const TestWrapper = styled.div`
	
`;

export const VideoWrapper = styled.video`
	height: 50vh;
	width: 100%;
	object-fit: cover;

	@media (min-width: 700px) {
		height: 90vh;
	}
`;

export const InfoWrapper = styled(Wrapper)`
	flex-direction: column;
	align-items: center;

	@media (min-width: 700px) {
		flex-direction: row;
		justify-content: space-evenly;
		height: 90vh;
	}
`;

export const TextWrapper = styled.p`
	height: 40vh;
	width: 30vh;
	padding: 40px;
	border: 1px solid black;
	border-radius: 20px;

	@media (min-width: 700px) {
		height: 50vh;
	}
`;

export const ImageInfoWrapper = styled.img`
	height: 45vh;
	width: 35vh;

	@media (min-width: 700px) {
		height: 55vh;
		width: 45vh;
	}
`;

export const ImageBackgroundWrapper = styled(Wrapper)`
	background-image: url(${Meat});
	background-size: cover;
	height: 40vh;
	width: 100%;
	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

	@media (min-width: 700px) {
		height: 90vh;
	}
`;

export const FontWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: whitesmoke;
	

	@media (min-width: 700px) {
		align-items: center;
		justify-content: center;
		font-size: x-large;
	}
`


