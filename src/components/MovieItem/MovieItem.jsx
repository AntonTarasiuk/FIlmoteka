import noPosterImg from '../../images/no-poster.jpg'
import { Movie, MoviePoster, MovieTitle, MovieEditionalInfo, MovieGenres, MovieRaiting } from './MovieItem.styled'

const genres = [
    "Drama",
    "Comedy",
    "Actin",
    "Fantasy",
    "Horor"
]

const shownGenres = 2
const otherGenres = [...genres.slice(shownGenres, genres.length)];
console.log(otherGenres)
        
export const MovieItem = () => {

    const genreList =
        genres.length <= shownGenres
        ? genres.join(', ')
        : genres[0] + ", " + genres[1] + ", Other"
    // console.log(arrayN)
    return (
        <Movie>
            <MoviePoster src={noPosterImg} alt="Default poster img" />
            <MovieTitle>Movie</MovieTitle>
            <MovieEditionalInfo>
                <MovieGenres>{genreList} |&nbsp;2020</MovieGenres>
                <MovieRaiting>8.0</MovieRaiting>
            </MovieEditionalInfo>
        </Movie>
    )
}