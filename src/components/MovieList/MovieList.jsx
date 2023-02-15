// import React from "react";
import { MovieItem } from "components/MovieItem/MovieItem"
import { MovieColection } from "./MovieList.styled"

export const MovieList = ({ openModalClick }) => {
    
    return (
        // <MainSection>       
        //     <MovieContainer>
                <MovieColection>
                    <MovieItem  openModalClick={openModalClick} />
                    <MovieItem  openModalClick={openModalClick} />
                    <MovieItem  openModalClick={openModalClick} />
                    <MovieItem  openModalClick={openModalClick} />
                </MovieColection>
        //     {/* </MovieContainer>
        // </MainSection> */}
    )
}