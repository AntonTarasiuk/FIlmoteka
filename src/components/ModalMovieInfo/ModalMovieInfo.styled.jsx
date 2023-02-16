import styled from "@emotion/styled";

export const MovieInfoWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 240px;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        width: 100%;
    }
`

export const MoviePoster = styled.img`
    display: inline;

    margin-right: 10px;
    width: 120px;
    height: 100%;

    border-radius: 5px;
        
    @media screen and (min-width: 768px) {
        width: 264px;
        height: 375px;
        margin: 0 68px 0 0;
    }
        
    @media screen and (min-width: 1024px) {
        width: 375px;
        height: 480px;
        margin-right: 16px;
    }
`

export const MovieTitle = styled.h2`
    margin-top: 20px;
    margin-bottom: 20px;

    font-size: 20px;
    line-height: 1.15;
    font-weight: 500;

    text-transform: uppercase;

    @media screen and (min-width: 768px) {
        margin-top: 0;
    }

    @media screen and (min-width: 1024px) {
        font-size: 30px;
        line-height: 1.17;
    }
`

export const MobileMovieAttrList = styled.dl`
    display: inline-block;

    width: 110px;

    @media screen and (min-width: 768px) {
        margin-bottom: 20px;
    }
`

export const MovieAttrList = styled.table`
    margin-bottom: 8px;
    width: 100%;

    border-collapse: separate;
    border-spacing: 0 8px;

    @media screen and (min-width: 768px) {
        // margin-bottom: 20px;
    }
`

export const MobileMovieAttr = styled.dt`
    color: ${props => props.theme.colors.secondTextColor};
    font-size: 12px;
    line-height: 1.33;
    font-weight: 500;
`

export const MovieAttr = styled.td`
    color: ${props => props.theme.colors.secondTextColor};
    font-size: 12px;
    line-height: 1.33;
    font-weight: 500;

    width: 40%;
    padding-right: 4px;
`

export const MobileMovieAttrValue = styled.dd` 
    display: inline-flex;
   
    font-size: 12px;
    line-height: 1.17;
    font-weight: 500;

    :not(:last-of-type) {
        margin-bottom: 12px;
    }
`

export const MovieAttrValue = styled.td` 
    display: inline-flex;
   
    font-size: 12px;
    line-height: 1.17;
    font-weight: 500;

    width: 140px;
    padding-left: 4px;
`

export const VotedNum = styled.span`
    display: block;

    width: 36px;
    height: 16px;

    background-color: ${props => props.theme.colors.footerBgColor};
    border-radius: 5px;

    text-align: center;
`

export const OriginNameValue = styled.span`
    text-transform: uppercase;
`

export const DescriptionSubtitle = styled.p`
    margin-bottom: 8px;

    text-transform: uppercase;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 500;
`

export const Description = styled.p`
    margin-bottom: auto;

    font-size:12px;
    line-height: 1.67;
    font-weight: 500;

    @media screen and (min-width: 768px) {
        margin-bottom: 20px;
    }
`

export const ModalBtnSet = styled.div`
    display: flex;
`

export const ModalBtn = styled.button`
    width: 110px;
    height: 44px;
    border-radius: 5px;
    padding: 6px 10px 6px;
  
    text-transform: uppercase;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 500;

    border: 1px solid  ${props => props.theme.colors.mainTextColor};
    background-color: ${props => props.theme.colors.headerTextColor};

    @media screen and (min-width: 768px) {
        width: 125px;
    }

    @media screen and (min-width: 1024px) {
        width: 136px;
    }

    transition:
        background-color ${props => props.theme.cubic},
        color ${props => props.theme.cubic},
        border-color ${props => props.theme.cubic};

    :hover,
    :focus {
        background-color: ${props => props.theme.colors.accentColor};
        color: ${props => props.theme.colors.headerTextColor};
        border-color: ${props => props.theme.colors.accentColor};
    }

    :not(:last-of-type){
        margin-right: 20px;

        @media screen and (min-width: 768px) {
            margin-right: 15px;
        }
    }
`