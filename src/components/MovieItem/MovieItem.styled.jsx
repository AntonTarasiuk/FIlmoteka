import styled from "@emotion/styled";

export const Movie = styled.li`
    width: 100%;

    @media screen and (min-width: 768px) {
        width: calc((100% - 32px * 2) / 2);
        margin-right: 16px;
        margin-left: 16px;
    }

    @media screen and (min-width: 1024px) {
        width: calc((100% - 16px * 3) / 3);
        margin-right: 8px;
        margin-left: 8px;
    }

    :not(:last-child) {
        margin-bottom: 20px;
        
        @media screen and (min-width: 768px) {
            margin-bottom: 0;
        }
    }

    :not(:nth-last-child(-n+2)) {
        @media screen and (min-width: 768px) {
            margin-bottom: 32px;
        }
    
        @media screen and (min-width: 1024px) {
            margin-bottom: 0;
        }
    }

    :not(:nth-last-child(-n+3)) {
        @media screen and (min-width: 1024px) {
            margin-bottom: 32px;
        }
    }
`

export const MoviePoster = styled.img`
    margin-bottom: 10px;
    width: 100%;
    height: 450px;
    border-radius: 5px;
    cursor: pointer;

    @media screen and (min-width: 1024px) {
        margin-bottom: 8px;
    }
`

export const MovieTitle = styled.h3`
    text-transform: uppercase;
    color: ${props => props.theme.colors.mainTextColor};
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
`

export const MovieGenres = styled.p`
    color: ${props => props.theme.colors.accentColor};
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
`

export const MovieYearBefore = styled.span`
    ::before {
    content: '';
    width: 1px;
    height: 10px;
    margin: 0 3px;
    display: inline-block;
    background-color: ${props => props.theme.colors.accentColor};
}
`