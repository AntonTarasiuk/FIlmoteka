import PropTypes from 'prop-types';
import { SearchForm, SearchField, SearchFormButton } from './SearchForm.styled';
import sprite from "../../images/sprite.svg"
import { useState } from 'react';

export const MovieSearch = ({ size }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChacge = e => {
        const { value } = e.currentTarget;
console.log(value)
        setSearchValue(value)
    }

    const handlerSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(searchValue);
    }

    return (
        <SearchForm onSubmit={handlerSubmit}>
            <SearchField type="text" name='searchValue' value={searchValue} onChange={ handleChacge } />
            <SearchFormButton>
                <svg width={size} height={size}>
                    <use xlinkHref={`${sprite}#icon-search`} />
                </svg>
            </SearchFormButton>
        </SearchForm>
        // <LogoLink href="./index.html">
        //     <svg width={size} height={size}>
        //         <use xlinkHref={`${sprite}#icon-logo`} />
        //     </svg>
        //     {windowWidth > 767 && <p>Filmoteka</p>}
        // </LogoLink>
    )
}

MovieSearch.propTypes = {
    size: PropTypes.number.isRequired,
}