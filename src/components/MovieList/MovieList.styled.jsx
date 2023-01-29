import styled from "@emotion/styled";

// export const MainSection = styled.section`
//     background-color: #fff;
//     min-height: 900px;
//     padding-top: 20px;
//     padding-bottom: 20px;
// `

// export const MovieContainer = styled.div` 
//     padding: 0 20px;
//     margin: 0 auto;

//     @media screen and (min-width: 320px) {
//         width: 320px;
//     }

//     @media screen and (min-width: 768px) {
//         display: flex;
//         flex-wrap: wrap;
//         width: 768px;
//         padding: 0 32px;
//     }

//     @media screen and (min-width: 1024px) {
//         width: 1024px;
//     }
// `

export const MovieColection = styled.ul`
    width: 100%;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        margin-right: calc(-1 * 32px);
    }

    @media screen and (min-width: 1024px) {
        margin-right: calc(-1 * 16px);
    }
`