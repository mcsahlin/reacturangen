import styled from 'styled-components';
import contactHeroImg from '../../assets/img/meat-1.jpg';

export const HeroSection = styled.section`
	background-image: url(${contactHeroImg});
	background-size: cover;
	height: 500px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const InfoBox = styled.div`
	background-color: black;
	color: white;
	width: 40%;
	height: 80%;
`;
