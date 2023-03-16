import { Link } from 'react-router-dom';
import { HeroSection, InfoBox } from '../components/styled/ContactHero';
import {
	ContactInfoWrapper,
	InfoDetailsWrapper,
	InfoTimeWrapper,
} from '../components/styled/Wrappers';
import { Heading } from '../components/styled/Headings';
import { useState } from 'react';

export const Contact = () => {
	const [admin, setAdmin] = useState(false);
	return (
		<HeroSection>
			<InfoBox>
				<ContactInfoWrapper>
					<Heading color='white' thin={true}>
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
					<Heading color='white' thin={true}>
						ÖPPETTIDER
					</Heading>
					<InfoDetailsWrapper>
						<span>Måndag - Torsdag</span>
						<InfoTimeWrapper>
							<span>16</span>
							<span>-</span>
							<span>00</span>
						</InfoTimeWrapper>
					</InfoDetailsWrapper>
					<InfoDetailsWrapper>
						<span>Fredag</span>
						<InfoTimeWrapper>
							<span>16</span>
							<span>-</span>
							<span>01</span>
						</InfoTimeWrapper>
					</InfoDetailsWrapper>
					<InfoDetailsWrapper>
						<span>Lördag</span>
						<InfoTimeWrapper>
							<span>12</span>
							<span>-</span>
							<span>01</span>
						</InfoTimeWrapper>
					</InfoDetailsWrapper>
					<InfoDetailsWrapper>
						<span>Söndag</span>
						<InfoTimeWrapper>
							<span>16</span>
							<span>-</span>
							<span>00</span>
						</InfoTimeWrapper>
					</InfoDetailsWrapper>
				</ContactInfoWrapper>
			</InfoBox>
		</HeroSection>
	);
};
