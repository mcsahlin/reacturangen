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
} from './styled/Navbar.style';
// import LogoImg from "../../assets/logo.png";

export const Navbar = () => {
	const [extendBurger, setExtendedBurger] = useState(false); // extending navbar for hamburger links

	const handleClick = () => {};

	return (
		<>
			<NavbarContainer extendBurger={extendBurger}>
				<NavbarInnerContainer>
					<LeftContainer>
						{/* <Logo src={LogoImg}></Logo> */}
						<NavbarLinkContainer>
							<NavbarLinks to='/'>Hem</NavbarLinks>
							<NavbarLinks to='/booking'>Boka bord</NavbarLinks>
							<NavbarLinks to='/contact'>Kontakt oss</NavbarLinks>
							<NavbarLinks to='/admin'>Admin</NavbarLinks>
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
						<NavbarLinksExtended onClick={handleClick} to='/'>
							Hem
						</NavbarLinksExtended>
						<NavbarLinksExtended onClick={handleClick} to='/booking'>
							Boka bord
						</NavbarLinksExtended>
						<NavbarLinksExtended onClick={handleClick} to='/contact'>
							Kontakt oss
						</NavbarLinksExtended>
						<NavbarLinksExtended onClick={handleClick} to='/admin'>
							Admin
						</NavbarLinksExtended>
					</NavbarExtendedContainer>
				)}
			</NavbarContainer>
		</>
	);
};
