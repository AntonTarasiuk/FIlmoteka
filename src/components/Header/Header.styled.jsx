import styled from "@emotion/styled";
import headerHomeMobile from "../../images/header-home-mobile.jpg"
import headerHomeMobile2x from "../../images/header-home-mobile@2x.jpg"

export const HeaderMain = styled.header`
    height: 230px;
    padding: 40px 15px;
    background-color: hotpink;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
      url(${headerHomeMobile});

    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
        url(${headerHomeMobile2x});
    }
`
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // font-size: 20px;
    // color: #010101;