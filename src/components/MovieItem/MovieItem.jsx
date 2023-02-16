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
// const otherGenres = [...genres.slice(shownGenres, genres.length)];
        
export const MovieItem = ({ openModalClick }) => {

    const genreList =
        genres.length <= shownGenres
        ? genres.join(', ')
        : genres[0] + ", " + genres[1] + ", Other"
    // console.log(arrayN)

    const handleClick = () => {
        openModalClick()
    }

    return (
        <Movie onClick={handleClick}>
            <MoviePoster src={noPosterImg} alt="Default poster img" />
            <MovieTitle>Movie</MovieTitle>
            <MovieEditionalInfo>
                <MovieGenres>{genreList} |&nbsp;2020</MovieGenres>
                <MovieRaiting>8.0</MovieRaiting>
            </MovieEditionalInfo>
        </Movie>
    )
}