import styled from "@emotion/styled";

export const Backdrop = styled.div`
    display: flex;
    justify-content: center;

    position: fixed;
    width: 100%;
    height: 100%;

    left: 0px;
    top: 0px;
    z-index: 1;

    overflow-y: scroll;
    transition: opacity 500ms linear;
    
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: rgba(0, 0, 0, 0.25);;
    background-repeat: no-repeat;
    background-size: cover;
`

export const ModalWindow = styled.div`
    display: block;
    position: absolute;
    width: 90%;

    top: 20px;

    z-index: 2;
    
    padding: 48px 20px 40px;

    background-color: ${props => props.theme.colors.headerTextColor};
    transition: opacity 500ms linear;

    box-shadow:
        5px 5px 5px 8px ${props => props.theme.colors.accentColor},
        -5px -5px -5px 8px ${props => props.theme.colors.accentColor};

    @media screen and (min-width: 768px) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        width: 704px;

        padding: 40px 36px;
    }

    @media screen and (min-width: 1024px) {
        width: 814px;

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

export const MovieInfoWrapper = styled.div`
    display: block;
    margin: 0 auto;
    width: 240px;

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
        width: 100%;
    }
`

export const MoviePoster = styled.img`
    margin: 0 auto 20px;
    width: 100%;
    height: auto;

    border-radius: 5px;
        
    @media screen and (min-width: 768px) {
        width: 264px;
        margin: 0 68px 0 0;
    }
        
    @media screen and (min-width: 1024px) {
        width: 375px;
        margin-right: 16px;
    }
`

export const MovieTitle = styled.h2`
    margin-bottom: 20px;

    font-size: 20px;
    line-height: 1.15;
    font-weight: 500;

    text-transform: uppercase;

    @media screen and (min-width: 1024px) {
        font-size: 30px;
        line-height: 1.17;
    }
`

export const MovieAttrList = styled.table`
    margin-bottom: 20px;
    width: 100%;

    border-collapse: separate;
    border-spacing: 0 8px;
`

export const MovieAttr = styled.td`
    color: ${props => props.theme.colors.secondTextColor};
    font-size: 12px;
    line-height: 1.33;
    font-weight: 500;

    width: 40%;
    padding-right: 4px;
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
    margin-bottom: 20px;

    font-size:12px;
    line-height: 1.67;
    font-weight: 500;

    @media screen and (min-width: 768px) {
        margin-bottom: 36px;
    }
    
    @media screen and (min-width: 1024px) {
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
`