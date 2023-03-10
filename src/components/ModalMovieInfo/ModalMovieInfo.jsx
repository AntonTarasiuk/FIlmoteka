// import { ThreeDots } from  'react-loader-spinner'

// import TextTruncate from 'react-text-truncate';
import { MovieRaiting } from "components/MovieItem/MovieItem.styled";
import noPosterImg from '../../images/no-poster.jpg';
import {
    MovieInfoWrapper,
    TextInfoWrapper,
    MoviePoster,
    MovieTitle,
    MobileMovieAttrList,
    MovieAttrList,
    MobileMovieAttr,
    MovieAttr,
    MobileMovieAttrValue,
    MovieAttrValue,
    VotedNum,
    OriginNameValue,
    DescriptionSubtitle,
    Description,
    ModalBtnSet,
    ModalBtn
} from "./ModalMovieInfo.styled";

export const ModalMovieInfo = ({ modalWidth, modalMovie }) => {
  
    const poster = modalMovie && (modalMovie.poster_path ? `https://image.tmdb.org/t/p/w300${modalMovie.poster_path}` : noPosterImg);
    const title = modalMovie && (modalMovie.title ?? modalMovie.name);
    const originalTitle = modalMovie && (modalMovie.original_title ?? modalMovie.original_name);
    const voteAverage = modalMovie && modalMovie.vote_average.toFixed(1);
    const voteCount = modalMovie && modalMovie.vote_count;
    const votedValue = voteCount < 1000 ? voteCount : (voteCount / 1000).toFixed(1) + "K";
    const popularity = modalMovie && modalMovie.popularity.toFixed(1);
    const genres = modalMovie && modalMovie.genres.map(genreObj => genreObj.name).join(', ')

    return (
        <MovieInfoWrapper>
            {/* {modalMovie ??
                <ThreeDots
                    height="100" 
                    width="100" 
                    radius="10"
                    color="#ff6b08" 
                    ariaLabel="three-dots-loading"
                    // wrapperStyle={{}}
                    // wrapperClassName=""
                    // visible={true}
                />
            } */}
            {modalMovie && <>
                <MoviePoster src={poster} alt={title} />
                    {modalWidth < 768 &&
                        <MobileMovieAttrList>
                        <MobileMovieAttr>Vote / Votes</MobileMovieAttr>
                            <MobileMovieAttrValue><MovieRaiting>{voteAverage}</MovieRaiting>&nbsp;/&nbsp;<VotedNum>{votedValue}</VotedNum></MobileMovieAttrValue>
                            <MobileMovieAttr>Popularity</MobileMovieAttr>
                            <MobileMovieAttrValue>{popularity}</MobileMovieAttrValue>
                            <MobileMovieAttr>Original</MobileMovieAttr>
                            <MobileMovieAttrValue><OriginNameValue>{originalTitle}</OriginNameValue></MobileMovieAttrValue>
                            <MobileMovieAttr>Genre</MobileMovieAttr>
                            <MobileMovieAttrValue>{genres}</MobileMovieAttrValue>
                        </MobileMovieAttrList>
                    }
                    <TextInfoWrapper>
                        <MovieTitle>{title}</MovieTitle>
                        {modalWidth >= 768 &&
                            <MovieAttrList>
                                <tbody>
                                    <tr>
                                        <MovieAttr>Vote / Votes</MovieAttr>
                                        <MovieAttrValue><MovieRaiting>{voteAverage}</MovieRaiting>&nbsp;/&nbsp;<VotedNum>{votedValue}</VotedNum></MovieAttrValue>
                                    </tr>
                                    <tr>
                                        <MovieAttr>Popularity</MovieAttr>
                                        <MovieAttrValue>{popularity}</MovieAttrValue>
                                    </tr>
                                    <tr>
                                        <MovieAttr>Original </MovieAttr>
                                        <MovieAttrValue>
                                            <OriginNameValue>{originalTitle}</OriginNameValue>
                                        </MovieAttrValue>
                                    </tr>
                                    <tr>
                                        <MovieAttr>Genre</MovieAttr>
                                        <MovieAttrValue>{genres}</MovieAttrValue>
                                    </tr>
                                </tbody>
                            </MovieAttrList>
                        }
                    
                        <DescriptionSubtitle>about</DescriptionSubtitle>
                        <Description>
                            {modalMovie.overview}
                        </Description>
                        <ModalBtnSet>
                            <ModalBtn type="button"
                                data-action="details-watched-btn">add to
                                watched</ModalBtn>
                            {/* <ModalBtn class="details__button removeFromWatchedBtn-JS isHidden" type="button"
                            data-action="details-del-watched-btn">remove from
                            watched</ModalBtn> */}
                            <ModalBtn type="button"
                                data-action="details-queue-btn">add to
                                queue</ModalBtn>
                            {/* <ModalBtn class="details__button removeFromQueueBtn-JS isHidden" type="button"
                            data-action="details-del-queue-btn">remove from
                            queue</ModalBtn> */}
                        </ModalBtnSet>
                    </TextInfoWrapper>
                </>
            }
        </MovieInfoWrapper>
    )
}