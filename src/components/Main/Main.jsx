import { MainSection, MainContainer } from "./Main.styled"
import { MovieList } from "components/MovieList/MovieList"
import { TrendsBtnList } from "components/TrendsBtnList/TrendsBtnList"
import { Paginator } from "components/Pagination/Pagination"

export const Main = ({ openModalClick }) => {
    return (
        <MainSection>       
            <MainContainer>
                <TrendsBtnList/>
                <MovieList openModalClick={ openModalClick } />
                <Paginator />
            </MainContainer>
        </MainSection>
    )
}