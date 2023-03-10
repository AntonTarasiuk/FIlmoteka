import PropTypes from 'prop-types';
import { SearchForm, SearchField, SearchFormButton } from './SearchForm.styled';
import sprite from "../../images/sprite.svg"
import { Formik } from 'formik';

export const MovieSearch = ({ size, searchValue }) => {
    const handlerSubmit = (value, actions) => {
        if (value === '') {
            return
        }
        searchValue(value.searchValue);
        actions.resetForm();
    }

    return (
        <Formik initialValues={{ searchValue: '' }} onSubmit={handlerSubmit}>
            {/* {({ isSubmitting }) => ( */}
                <SearchForm>
                    <SearchField
                        type="text"
                        name='searchValue'
                        placeholder="Search movies" />
                    <SearchFormButton type='submitt' >
                        <svg width={size} height={size}>
                            <use xlinkHref={`${sprite}#icon-search`} />
                        </svg>
                    </SearchFormButton>
                </SearchForm>
            {/* )} */}
        </Formik>
    )
}

MovieSearch.propTypes = {
    size: PropTypes.number.isRequired,
}