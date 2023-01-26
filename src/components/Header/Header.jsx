import React, {useLayoutEffect, useState} from "react";
// import PropTypes from 'prop-types';
import { HeaderMain } from "./Header.styled";
import { Logo } from "components/Logo/Logo";
import { Navigation } from "components/Navigation/Navigation";
import { MovieSearch } from "components/SearchForm/SearchForm";

// import { ContactEl, ContactNumber, DeleteButton } from "./Contact.styled";

export const Header = () => {
    const [width, setWidth] = useState(0);
    const [ratio, setRatio] = useState(0);

    console.log(ratio)
    console.log(width)

    useLayoutEffect(() => {
        setWidth(window.innerWidth);
        setRatio(window.devicePixelRatio);       
    }, []);

    return <HeaderMain windowWidth={width} ratio={ratio}>
        <Logo size={24} windowWidth={width}></Logo>
        <Navigation></Navigation>
        <MovieSearch size={24}></MovieSearch>
    </HeaderMain>
}

// Contact.propTypes = {
//     id: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
// }