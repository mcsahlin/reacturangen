import styled from "styled-components";
import contactHeroImg from "../../assets/img/meat-1.jpg";

export const HeroSection = styled.section`
  background-image: url(${contactHeroImg});
  background-size: cover;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  border-bottom: 5px solid black;
`;

export const InfoBox = styled.div`
  margin-right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Montserrat, sans-serif;
  font-weight: 100;
  gap: 30px;
  background-color: #131313;
  color: white;
  width: 30%;
  height: 85vh;
  padding: 10px 20px;
  font-weight: 100;

  @media (max-width: 700px) {
    font-size: 0.5rem;
  }
`;
