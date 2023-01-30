import { FooterComp, FoterSection, FooterText, FooterDeveloperInfo, FooterIcon, FooterLink } from "./Footer.styled"
import sprite from "../../images/sprite.svg";    

export const Footer = () => {
    return (
        <FooterComp id="footer-switch">
            <FoterSection>
                <FooterText>&#169; 2022 | All Rights Reserved | &nbsp;
                    <FooterDeveloperInfo>Developed with
                        <FooterIcon width="16" height="14">
                            <use xlinkHref={`${sprite}#icon-heart`} />
                        </FooterIcon>
                        by <FooterLink href="https://github.com/AntonTarasiuk">
                            Anton Tarasuik
                        </FooterLink>
                    </FooterDeveloperInfo>
                </FooterText>
            </FoterSection>
        </FooterComp>
    )
}