import { HeroSection, InfoBox } from "../components/styled/ContactHero";
import {
  ContactInfoWrapper,
  InfoDetailsWrapper,
  InfoTimeWrapper,
} from "../components/styled/Wrappers";
import { Heading } from "../components/styled/Headings";

export const Contact = () => {
  return (
    <>
      <HeroSection>
        <InfoBox>
          <ContactInfoWrapper>
            <Heading color="white" thin={true}>
              KONTAKT
            </Heading>
            <InfoDetailsWrapper>
              <span>Telefon:</span>
              <span>+46(0)8-710 98 63</span>
            </InfoDetailsWrapper>
            <InfoDetailsWrapper>
              <span>Email:</span>
              <span>info@reacturangen.se</span>
            </InfoDetailsWrapper>
            <InfoDetailsWrapper>
              <span>Adress:</span>
              <span>Reactsvängen 1, Stockholm</span>
            </InfoDetailsWrapper>
          </ContactInfoWrapper>
          <ContactInfoWrapper>
            <Heading color="white" thin={true}>
              ÖPPETTIDER
            </Heading>
            <InfoDetailsWrapper>
              <span>Måndag - Söndag</span>
              <InfoTimeWrapper>
                <span>18</span>
                <span>-</span>
                <span>21</span>
              </InfoTimeWrapper>
            </InfoDetailsWrapper>
          </ContactInfoWrapper>
        </InfoBox>
      </HeroSection>
    </>
  );
};
