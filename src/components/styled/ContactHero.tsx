import styled from 'styled-components';
import contactHeroImg from '../../assets/img/meat-1.jpg';

export const HeroSection = styled.section`
	background-image: url(${contactHeroImg});
	background-size: cover;
	height: 500px;
	display: flex;
	align-items: center;
	justify-content: right;
`;

export const InfoBox = styled.div`
	margin-right: 5%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-family: Montserrat, sans-serif;
	font-weight: 100;
	gap: 30px;
	background-color: black;
	color: white;
	border-radius: 7px;
	width: 30%;
	height: 80%;
	padding: 10px 20px;
	font-weight: 100;
`;
