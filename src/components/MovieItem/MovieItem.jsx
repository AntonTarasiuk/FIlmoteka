import noPosterImg from '../../images/no-poster.jpg';
import { Movie, MoviePoster, MovieTitle, MovieEditionalInfo, MovieGenres, MovieRaiting } from './MovieItem.styled';
// import { Modal } from "components/Modal/Modal";
// import { ModalMovieInfo } from "components/ModalMovieInfo/ModalMovieInfo";

const genres = [
    "Drama",
    "Comedy",
    "Actin",
    "Fantasy",
    "Horor"
]

const shownGenres = 2
// const otherGenres = [...genres.slice(shownGenres, genres.length)];
        
export const MovieItem = ({ movie, openModalClick, closeModal, showModal, modalWidth, setSelectedMovieId, modalMovie}) => {

    const genreList =
        genres.length <= shownGenres
        ? genres.join(', ')
        : genres[0] + ", " + genres[1] + ", Other"

    const handleClick = () => {
        openModalClick()
        setSelectedMovieId(movie.id)
    }
    // console.log(modalMov ie)

    const poster = () => {
        if (movie.poster_path) {
            return `https://image.tmdb.org/t/p/w300${movie.poster_path}`
        } else if (movie.profile_path) {
            return `https://image.tmdb.org/t/p/w300${movie.profile_path}`
        } else {
            return noPosterImg
        }
    }
    const title = movie.name ?? movie.title;
    const releaseDate = movie.first_air_date ?? movie.release_date ?? "-";
    const raiting = movie.vote_average ?? movie.popularity

    return (
        <>
            <Movie onClick={handleClick}>
                <MoviePoster src={poster()} alt="Default poster img" />
                <MovieTitle>{title}</MovieTitle>
                <MovieEditionalInfo>
                    <MovieGenres>{genreList} |&nbsp;{releaseDate.slice(0, 4)}</MovieGenres>
                    <MovieRaiting>{raiting.toFixed(1)}</MovieRaiting>
                </MovieEditionalInfo>
            </Movie>
            {/* {showModal &&
                <Modal closeModal={closeModal}>
                    <ModalMovieInfo modalWidth={modalWidth} modalMovie={modalMovie} />
                </Modal>
            } */}
        </>
    )
}