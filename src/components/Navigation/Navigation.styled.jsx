import styled from "@emotion/styled";

export const NavBar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: auto;
    // margin-bottom: 54px;
    margin-bottom: 60px;

    color: ${props => props.theme.colors.headerTextColor};

    @media screen and (min-width: 768px){
        margin-bottom: 40px;
    }
`

export const NavButton = styled.p`
    position: relative;

    color: ${props => props.theme.colors.headerTextColor};
    font-weight: 500;
    font-size: 12px;
    line-height: 1.17;
    text-transform: uppercase;

    transition: color ${props => props.theme.cubic};

    :hover {
        color: ${props => props.theme.colors.accentColor};
    }

    :not(:last-child) {
        margin-right: 40px;
    }

    ::after {
        position: absolute;
        
        content: '';
        width: 100%;
        height: 3px;
        left: 0;
        display: block;
        background-color: #FF6B08;
        border-radius: 2px;
    }
`