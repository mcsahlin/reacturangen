import styled from 'styled-components';
import Meat from '../../assets/img/meat-2.jpeg';

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

export const TestWrapper = styled.div``;

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
	clip-path: polygon(0 0, 100% 0, 100% 20%, 100% 100%, 80% 100%, 49% 77%, 19% 100%, 0 100%);


	@media (min-width: 700px) {
		height: 90vh;
	}
`;

export const DualInputWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
`;

export const FormWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 10px;
	border: 1px solid gray;
`;

export const PageWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	width: 100vw;
	@media (min-width: 768px) {
		max-width: 1200px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const GuestCountWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
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
`;
