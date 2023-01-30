import styled from "@emotion/styled";

export const PaginatorBtns = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
`

export const PrevNextBtns = styled.button`
    border-radius: 5px; 
    width: 40px;
    height: 40px;
`

export const PageBtns = styled.button`
    background-color: transparent;
    border-radius: 5px;
    padding: 12px;
    width: 40px;
    height: 40px;

    :first-of-type,
    :last-of-type {
        background-color: #F7F7F7;
    };

    :last-of-type {
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    transition: 
        background-color ${props => props.theme.cubic}, 
        color ${props => props.theme.cubic},
        fill ${props => props.theme.cubic};

    :hover,
    :focus {
        background-color: ${props => props.theme.colors.accentColor};
        color: ${props => props.theme.colors.headerTextColor};
        fill: ${props => props.theme.colors.headerTextColor};
    }

`