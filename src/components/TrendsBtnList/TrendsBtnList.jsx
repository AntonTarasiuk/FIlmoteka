import { TrendBtn } from "./TrendsBtnList.styled"

export const TrendsBtnList = () => {
    return (
        <ul class="main__button-list">
            <li class="main__button-item">
                <TrendBtn id="button-color-day">
                    Daily Trends
                </TrendBtn>
            </li>
            <li class="main__button-item">
                <TrendBtn id="button-color-week">
                    Weekly Trends
                </TrendBtn>
            </li>
        </ul>
    )
    
}