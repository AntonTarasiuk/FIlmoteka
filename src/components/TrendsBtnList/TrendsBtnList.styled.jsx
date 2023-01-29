import styled from "@emotion/styled";

export const TrendBtn = styled.button`
    width: 130px;
    height: 44px;
    border-radius: 5px;
    padding: 15px;

    text-transform: uppercase;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 500;

    border: 1px solid ${props => props.theme.colors.mainTextColor};
    background-color: ${props => props.theme.colors.headerTextColor};


    @include respond-to (tablet) {
        width: 152px;
    }

    @include respond-to (desktop) {
        width: 147px;
        height: 42px;
    }

    @include transit(background-color, color, border-color);

    :hover,
    :focus {
        background-color: $accent-color;
        color: $header-text-color;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
            0px 1px 1px rgba(0, 0, 0, 0.14),
            0px 2px 1px rgba(0, 0, 0, 0.2);
    }
`