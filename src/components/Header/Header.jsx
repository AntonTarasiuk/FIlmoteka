// import PropTypes from 'prop-types';
import { HeaderSection, HeaderContainer, SearchMsg } from "./Header.styled";
import { Navigation } from "components/Navigation/Navigation";
import { MovieSearch } from "components/SearchForm/SearchForm";
// import { HeaderLibraryBtns } from "components/HeaderLibraryBtns/HeaderLibraryBtns";

export const Header = ({ searchValue, width, ratio }) => {
    return (
        <HeaderSection windowWidth={width} ratio={ratio} page={"home"}>
            <HeaderContainer>
                <Navigation size={24} windowWidth={width} />
                <MovieSearch size={12} onSubmit={searchValue} />
                {/* <HeaderLibraryBtns /> */}
                <SearchMsg>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates laboriosam</SearchMsg>
            </HeaderContainer>
        </HeaderSection>
    )
}

// Contact.propTypes = {
//     id: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
// }