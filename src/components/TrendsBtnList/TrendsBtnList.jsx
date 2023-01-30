import { TrendsBtns, TrendsBtnItem, TrendBtn } from "./TrendsBtnList.styled"

export const TrendsBtnList = () => {
    return (
        <TrendsBtns>
            <TrendsBtnItem>
                <TrendBtn id="button-color-day">
                    Daily Trends
                </TrendBtn>
            </TrendsBtnItem>
            <TrendsBtnItem>
                <TrendBtn id="button-color-week">
                    Weekly Trends
                </TrendBtn>
            </TrendsBtnItem>
        </TrendsBtns>
    )
    
}