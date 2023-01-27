// import PropTypes from 'prop-types';
import { NavBar } from "./Navigation.styled";
import { Logo } from "components/Logo/Logo";
import { NavButton } from "./Navigation.styled";

export const Navigation = ({size, windowWidth}) => {
    return (
        <NavBar>
            <Logo size={size} windowWidth={windowWidth}></Logo>
            <NavButton>Home</NavButton>
            <NavButton>My library</NavButton>
        </NavBar>
    )
}

// Logo.propTypes = {
//     size: PropTypes.number.isRequired,
// }