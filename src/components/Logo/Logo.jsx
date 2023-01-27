import PropTypes from 'prop-types';
import { LogoLink, LogoIcon, LogoLabel } from './Logo.styled';
import sprite from "../../images/sprite.svg"

export const Logo = ({ windowWidth }) => {
    return (
        <LogoLink href="./index.html">
            <LogoIcon width="24" height="24">
                <use xlinkHref={`${sprite}#icon-logo`} />
            </LogoIcon>
            {windowWidth >= 768 && <LogoLabel>Filmoteka</LogoLabel>}
        </LogoLink>
    )
}

Logo.propTypes = {
    size: PropTypes.number.isRequired,
    windowWidth: PropTypes.number.isRequired,
}


