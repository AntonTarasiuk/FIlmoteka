import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
// import PropTypes from 'prop-types';
import { HeaderMain } from "./Header.styled";
// import { Logo } from "components/Logo/Logo";
import { Navigation } from "components/Navigation/Navigation";
import { MovieSearch } from "components/SearchForm/SearchForm";
import { SearchMsg } from "./Header.styled";

// import { ContactEl, ContactNumber, DeleteButton } from "./Contact.styled";

export const Header = () => {
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
    const [ratio, setRatio] = useState(0);

    useLayoutEffect(() => {
        setWidth(window.innerWidth);
        setRatio(window.devicePixelRatio);       
    }, []);

    useEffect(() => {
        function handleWindowResize() {
            setWidth(ref.current.clientWidth);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    

    return <HeaderMain ref={ref} windowWidth={width} ratio={ratio}>
        {/* <Logo></Logo> */}
        <Navigation size={24} windowWidth={width}></Navigation>
        <MovieSearch size={12}></MovieSearch>
        <SearchMsg>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates laboriosam</SearchMsg>
    </HeaderMain>
}

// Contact.propTypes = {
//     id: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
// }