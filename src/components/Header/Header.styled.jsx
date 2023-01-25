import styled from "@emotion/styled";
import headerHomeMobile from "../../images/header-home-mobile.jpg"
import headerHomeMobile2x from "../../images/header-home-mobile@2x.jpg"
import headerHomeTablet from "../../images/header-home-tablet.jpg"
import headerHomeTablet2x from "../../images/header-home-tablet@2x.jpg"
import headerHomeDesktop from "../../images/header-home.jpg"
import headerHomeDesktop2x from "../../images/header-home@2x.jpg"

export const HeaderMain = styled.header`
    height: 230px;
    padding: 40px 15px;
    background-color: hotpink;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
        url(${props => {
            if (props.width < 768) {
                return (props.ratio > 1 ? headerHomeMobile2x : headerHomeMobile)
            } else if (props.width >= 768 & props.width < 1024) {
                return props.ratio > 1 ? headerHomeTablet2x : headerHomeTablet
            } else {
                return props.ratio > 1 ? headerHomeDesktop2x : headerHomeDesktop
            }
        }});
  }
`
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // font-size: 20px;
    // color: #010101;