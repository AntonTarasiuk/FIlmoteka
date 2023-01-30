import styled from "@emotion/styled";

export const LogoLink = styled.a`
    display: flex;
    align-items: center;
    color: tomato;
    margin-right: auto;
`

export const LogoIcon = styled.svg`
    @media screen and (min-width: 768px) {
        margin-right: 8px;
    };

    @media screen and (min-width: 1024px) {
        margin-right: 10px;
    }
`

export const LogoLabel = styled.p`
    font-weight: 500;
    font-size: 30px;
    line-height: 1.17;
    color: ${props => props.theme.colors.headerTextColor};
    transition: color ${props => props.theme.cubic};

    :hover{
        color: ${props => props.theme.colors.accentColor};
    }
`