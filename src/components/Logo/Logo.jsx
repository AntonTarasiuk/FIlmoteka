import PropTypes from 'prop-types';
import { LogoLink } from './Logo.styled';
import sprite from "../../images/sprite.svg"

export const Logo = ({ size,  windowWidth }) => {
    return (
        <LogoLink href="./index.html">
            <svg width={size} height={size}>
                <use xlinkHref={`${sprite}#icon-logo`} />
            </svg>
            {windowWidth > 767 && <p>Filmoteka</p>}
        </LogoLink>
    )
}

Logo.propTypes = {
    size: PropTypes.number.isRequired,
    windowWidth: PropTypes.number.isRequired,
}


