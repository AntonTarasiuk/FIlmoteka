import { MainSection, MainContainer } from "./Main.styled"
import { MovieList } from "components/MovieList/MovieList"
import { TrendsBtnList } from "components/TrendsBtnList/TrendsBtnList"
import { Paginator } from "components/Pagination/Pagination"
import { MediaTypeBtnList } from "components/MediaTypeBtsList/MediaTypeBtsList"

export const Main = ({ movieForRender, setTimeWindow, setMediaType, mediaType, setSearchParam, searchParam, showPagination, ...props }) => {
    return (
        <MainSection>       
            <MainContainer>
                {movieForRender.length > 0 && 
                    <>
                        <MediaTypeBtnList
                            setMediaType={setMediaType}
                            mediaType={mediaType}
                            setSearchParam={setSearchParam}
                            searchParam={searchParam}
                        />
                        <TrendsBtnList setTimeWindow={setTimeWindow} />
                        <MovieList movieForRender={movieForRender} {...props} />
                        {showPagination && <Paginator />}
                    </> 
                }
            </MainContainer>
        </MainSection>
    )
}