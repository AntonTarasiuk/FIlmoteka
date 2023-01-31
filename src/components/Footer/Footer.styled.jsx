import styled from "@emotion/styled";

export const FooterComp = styled.footer`
    background-color: ${props => props.theme.colors.footerBgColor};
    width: 100%;
`
    
export const FoterSection = styled.section`
    margin: 0 auto;
    padding: 30px 44px;
    text-align: center;
`

export const FooterText = styled.p`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 280px;
    margin: 0 auto;


    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    color: ${props => props.theme.colors.footerTextColor};

    @media screen and (min-width: 768px) {
        width: 100%;

        font-size: 16px;
        line-height: 1.19;
    }
`

export const FooterDeveloperInfo = styled.span`
    margin-top: 10px;

    @media screen and (min-width: 768px) {
        margin-top: 0;
    }
`
    
export const FooterIcon = styled.svg`
    margin: 0 10px;

    :hover {
        animation: 1s ease 0s infinite beat;
    
        @keyframes beat {
          40%, 60% { transform: scale(1.1, 1.2); }
          50%, 100% { transform: scale(1, 0.95); }
        }
    }
`

export const FooterLink = styled.a`
    text-decoration: underline;
    transition: color ${props => props.theme.cubic};

    :visited {
        color: inherit;
    }

    :hover,
    :focus {
        color: ${props => props.theme.colors.accentColor};
    }
`
