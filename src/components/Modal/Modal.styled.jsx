import styled from "@emotion/styled";

export const Backdrop = styled.div`
    display: flex;
    justify-content: center;

    position: fixed;
    width: 100vw;
    height: 100vh;

    left: 0px;
    top: 0px;
    z-index: 1;

    // overflow-y: scroll;
    transition: opacity 500ms linear;
    
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: rgba(0, 0, 0, 0.25);;
    background-repeat: no-repeat;
    background-size: cover;
`

export const ModalWindow = styled.div`
    display: block;
    position: absolute;
    width: 280px;
    height: 90%;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;

    z-index: 2;
    
    padding: 38px 20px;

    background-color: ${props => props.theme.colors.headerTextColor};
    transition: opacity 500ms linear;

    box-shadow:
        5px 5px 5px 8px ${props => props.theme.colors.accentColor},
        -5px -5px -5px 8px ${props => props.theme.colors.accentColor};

    @media screen and (min-width: 768px) {
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%) scale(1);
        // top: 0;
        // right: 0;
        // bottom: 0;
        // left: 0;
        // margin: auto;
        width: 704px;
        height: 480px;

        padding: 36px;
    }

    @media screen and (min-width: 1024px) {
        width: 814px;
        height: 560px;

        padding: 40px 16px;
    }
`

export const ModalCloseBtn = styled.button`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    top: 8px;
    right: 8px;

    min-width: 30px;
    min-height: 30px;
    padding: 0;

    background-color: ${props => props.theme.colors.headerTextColor};
    fill: red;
    
    :hover,
    :focus{
        fill: ${props => props.theme.colors.accentColor};
    }
`

