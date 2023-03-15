import { useState } from 'react';
import {
	NavbarContainer,
	LeftContainer,
	RightContainer,
	NavbarInnerContainer,
	NavbarExtendedContainer,
	NavbarLinkContainer,
	NavbarLinks,
	Logo,
	OpenLinksButton,
	NavbarLinksExtended,
} from './../components/styled/Navbar.style';
// import LogoImg from "../../assets/logo.png";

export const Navbar = () => {
	const [extendBurger, setExtendedBurger] = useState(false);

	return (
		<>
			<NavbarContainer>
				<NavbarInnerContainer>
					<LeftContainer>
						{/* <Logo src={LogoImg}></Logo> */}
						<NavbarLinkContainer>
							<NavbarLinks to='/'>Hem</NavbarLinks>
							<NavbarLinks to='/booking'>Boka bord</NavbarLinks>
							<NavbarLinks to='/contact'>Kontakt oss</NavbarLinks>
						</NavbarLinkContainer>
					</LeftContainer>
					<RightContainer>
						<OpenLinksButton
							onClick={() => {
								setExtendedBurger((curr) => !curr);
							}}
						>
							{extendBurger ? <>&#10005;</> : <>&#8801;</>}
						</OpenLinksButton>
					</RightContainer>
				</NavbarInnerContainer>
				{extendBurger && (
					<NavbarExtendedContainer>
						<NavbarLinksExtended to='/'>Hem</NavbarLinksExtended>
						<NavbarLinksExtended to='/booking'>Boka bord</NavbarLinksExtended>
						<NavbarLinksExtended to='/contact'>Kontakt oss</NavbarLinksExtended>
					</NavbarExtendedContainer>
				)}
			</NavbarContainer>
		</>
	);
};
