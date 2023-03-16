import { FooterDetailWrapper, FooterHourWrapper, FooterTextWrapper, FooterWrapper, IconWrapper, OpeningWrapper} from "./styled/Wrappers"
import { GiMonkey } from "react-icons/gi"
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"
import { SlSocialTwitter } from "react-icons/sl"
import { Link } from "react-router-dom"
import { Admin } from "../pages/Admin"

export const Footer = () => {
    return(
        <>
            <FooterWrapper>
                <FooterHourWrapper>
                    <h2>ÖPPETTIDER</h2>
                    <OpeningWrapper>
                        <span>Måndag - Torsdag</span>
                        <div>
                            <span>16</span>
                            <span>-</span>
                            <span>00</span>
                        </div>
                    </OpeningWrapper>
                    <OpeningWrapper>
                        <span>Fredag</span>
                        <div>
                            <span>16</span>
                            <span>-</span>
                            <span>01</span>
                        </div>
                    </OpeningWrapper>
                    <OpeningWrapper>
                        <span>Lördag</span>
                        <div>
                            <span>12</span>
                            <span>-</span>
                            <span>01</span>
                        </div>
                    </OpeningWrapper>
                    <OpeningWrapper>
                        <span>Söndag</span>
                        <div>
                            <span>16</span>
                            <span>-</span>
                            <span>00</span>
                        </div>
                    </OpeningWrapper>
                </FooterHourWrapper>

                <IconWrapper>
                    <Link to="/admin">
                        <IconWrapper>
                            <GiMonkey/>
                        </IconWrapper>
                    </Link>
                    <a>
                        <IconWrapper>
                                <AiOutlineFacebook/>
                        </IconWrapper>
                    </a>
                    <a>
                        <IconWrapper>
                            <AiOutlineInstagram/>
                        </IconWrapper>
                    </a>
                    <a>
                        <IconWrapper>
                            <SlSocialTwitter/>
                        </IconWrapper>
                    </a>
                </IconWrapper>
                
                <FooterDetailWrapper>
                        <FooterTextWrapper>
                            Adress: Reactsvängen 1, Stockholm
                        </FooterTextWrapper>
                        <FooterTextWrapper>
                            Tel: +46(0)8-710 98 63
                        </FooterTextWrapper>
                        <FooterTextWrapper>
                            Email: info@reacturangen.se
                        </FooterTextWrapper>
                </FooterDetailWrapper>
            </FooterWrapper>
        </>
    )
}