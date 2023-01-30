import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
// import PropTypes from 'prop-types';
import { HeaderSection, HeaderContainer, SearchMsg } from "./Header.styled";
import { Navigation } from "components/Navigation/Navigation";
import { MovieSearch } from "components/SearchForm/SearchForm";
import { HeaderLibraryBtns } from "components/HeaderLibraryBtns/HeaderLibraryBtns";

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

    return (
        <HeaderSection ref={ref} windowWidth={width} ratio={ratio}>
            <HeaderContainer>
                <Navigation size={24} windowWidth={width} />
                {/* <MovieSearch size={12} /> */}
                <HeaderLibraryBtns />
                {/* <SearchMsg>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates laboriosam</SearchMsg> */}
            </HeaderContainer>
        </HeaderSection>
    )
}

// Contact.propTypes = {
//     id: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
// }