import styled from "@emotion/styled";

export const TrendsBtns = styled.ul`
    display: flex;
    margin: 0 auto 20px;

    @media screen and (min-width: 768px) {
        margin: 0 auto 32px;
    }
`

export const TrendsBtnItem = styled.li`
    :first-of-type {
        margin-right: 20px;

        @media screen and (min-width: 768px) {
            margin-right: 32px;
        }

        @media screen and (min-width: 1024px) {
            margin-right: 16px;
        }
    }
`

export const TrendBtn = styled.button`
    width: 130px;
    height: 44px;
    border-radius: 5px;
    padding: 15px;

    text-transform: uppercase;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 500;

    border: 1px solid ${props => props.theme.colors.mainTextColor};
    background-color: ${props => props.theme.colors.headerTextColor};


    @media screen and (min-width: 768px) {
        width: 152px;
    }

    @media screen and (min-width: 1024px) {
        width: 147px;
        height: 42px;
    }

    transition: 
        background-color ${props => props.theme.cubic}, 
        color ${props => props.theme.cubic} ;

    :hover,
    :focus {
        background-color: ${props => props.theme.colors.accentColor};
        color: ${props => props.theme.colors.headerTextColor};
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
            0px 1px 1px rgba(0, 0, 0, 0.14),
            0px 2px 1px rgba(0, 0, 0, 0.2);
    }
`