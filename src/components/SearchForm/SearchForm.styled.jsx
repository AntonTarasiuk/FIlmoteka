import styled from "@emotion/styled";

export const SearchForm = styled.form`
    display: flex;
    margin: 0 auto 20px;
    max-width: 336px;
    border-bottom: 0.5px solid #FFFFFF;
    justify-content: center;
    align-items: center;
`

export const SearchField = styled.input`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    color: #FFFFFF;
    outline: none;
    background: none;
    width: 100%;
    padding: 4px;

    ::placeholder {
        color: #FFF;
        opacity: 1;
    }
`

export const SearchFormButton = styled.button`
    width: 16px;
    height: 20px;
    padding: 2px 2px 6px 2px;
    display: block;
    background: none;
`