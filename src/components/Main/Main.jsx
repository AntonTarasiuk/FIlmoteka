import { MainSection, MainContainer } from "./Main.styled"
import { MovieList } from "components/MovieList/MovieList"
import { TrendsBtnList } from "components/TrendsBtnList/TrendsBtnList"

export const Main = () => {
    return (
        <MainSection>       
            <MainContainer>
                <TrendsBtnList/>
                <MovieList/>
            </MainContainer>
        </MainSection>
    )
}