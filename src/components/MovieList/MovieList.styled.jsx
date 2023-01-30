import styled from "@emotion/styled";

export const MovieColection = styled.ul`
    width: 100%;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        margin-right: calc(-1 * 32px);
    }

    @media screen and (min-width: 1024px) {
        margin-right: calc(-1 * 16px);
    }
`