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
    color: #FFFFFF;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover{
        color: #FF6B08;
    }
`