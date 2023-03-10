import { Btns, BtnItem, Btn } from "./TrendsBtnList.styled"

export const TrendsBtnList = ({setTimeWindow}) => {
    return (
        <Btns>
            <BtnItem>
                <Btn id="button-color-day" onClick={() => setTimeWindow("day")}>
                    Daily Trends
                </Btn>
            </BtnItem>
            <BtnItem>
                <Btn id="button-color-week" onClick={() => setTimeWindow("week")}>
                    Weekly Trends
                </Btn>
            </BtnItem>
        </Btns>
    )
    
}