import { MainSection, MainContainer } from "./Main.styled"
import { MovieList } from "components/MovieList/MovieList"
import { TrendsBtnList } from "components/TrendsBtnList/TrendsBtnList"
import { Paginator } from "components/Pagination/Pagination"

export const Main = () => {
    return (
        <MainSection>       
            <MainContainer>
                <TrendsBtnList/>
                <MovieList />
                <Paginator />
            </MainContainer>
        </MainSection>
    )
}