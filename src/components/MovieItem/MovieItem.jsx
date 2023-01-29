import noPosterImg from '../../images/no-poster.jpg'
import { Movie, MoviePoster, MovieTitle, MovieGenres, MovieYearBefore } from './MovieItem.styled'

export const MovieItem = () => {
    return (
        <Movie>
            <MoviePoster src={noPosterImg} alt="Default poster img" />
            <MovieTitle>Movie</MovieTitle>
            <MovieGenres>Drama, Action <MovieYearBefore>2020</MovieYearBefore></MovieGenres>
        </Movie>
    )
}