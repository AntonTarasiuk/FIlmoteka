import useSound from "use-sound";
import { FooterComp, FoterSection, FooterText, FooterDeveloperInfo, FooterIcon, FooterLink } from "./Footer.styled"
import sprite from "../../images/sprite.svg";
import heartbeatSound from "../../heartbeat.ogg"

export const Footer = () => {
    const [play, { stop }] = useSound(
        heartbeatSound,
        { volume: 0.8 }
    );

    return (
        <FooterComp id="footer-switch">
            <FoterSection>
                <FooterText>&#169; 2022 | All Rights Reserved | &nbsp;
                    <FooterDeveloperInfo>Developed with
                        <FooterIcon
                            width="14"
                            height="14"
                            onMouseEnter={() => play()}
                            onMouseLeave={() => stop()}
                        >
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