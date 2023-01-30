import styled from "@emotion/styled";

export const BtnList = styled.ul`
    display: flex;
    justify-content: center;
`

export const BtnItem = styled.li`
    :first-of-type {
        margin-right: 20px;

        @media screen and (min-width: 768px){
            margin-right: 32px;
        }

        @media screen and (min-width: 1024px){
            margin-right: 16px;
        }
    }
`
    
export const LibraryBtn = styled.button`
    width: 130px;
    height: 44px;
    padding: 15px;

    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.headerTextColor};
    border-radius: 5px;
    
    font-size: 12px;
    font-weight: 500;
    line-height: 1.33;
    color: ${props => props.theme.colors.headerTextColor};
    text-transform: uppercase;

    transition: 
        background-color ${props => props.theme.cubic},
        border-color  ${props => props.theme.cubic};

    :hover {
        background-color: ${props => props.theme.colors.accentColor};
        border-color: ${props => props.theme.colors.accentColor};
    }
`