import styled from "@emotion/styled";

export const NavBar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: auto;
    margin-bottom: 54px;

    color: #fff;

    @media screen and (min-width: 768px){
        margin-bottom: 40px;
    }
`

export const NavButton = styled.p`
    color: #fff;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.17;
    text-transform: uppercase;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        color: #FF6B08
    }

    :not(:last-child) {
        margin-right: 40px;
    }
`