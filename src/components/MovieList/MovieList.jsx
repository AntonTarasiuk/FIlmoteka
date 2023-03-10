import { MovieItem } from "components/MovieItem/MovieItem"
import { MovieColection } from "./MovieList.styled"

export const MovieList = ({ movieForRender, ...props }) => {
    return (
        <MovieColection>
            {movieForRender.map(movie => (
                <MovieItem  key={movie.id} movie={movie} {...props} />
            ))}
        </MovieColection>
    )
}