import styled from "@emotion/styled";

export const MainSection = styled.section`
    background-color: ${props => props.theme.colors.headerTextColor};
    min-height: 900px;
    padding-top: 20px;
    padding-bottom: 20px;
`

export const MainContainer = styled.div` 
    padding: 0 20px;
    margin: 0 auto;

    @media screen and (min-width: 320px) {
        width: 320px;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        width: 768px;
        padding: 0 32px;
    }

    @media screen and (min-width: 1024px) {
        width: 1024px;
    }
`