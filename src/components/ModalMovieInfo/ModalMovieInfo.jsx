import { MovieRaiting } from "components/MovieItem/MovieItem.styled";
import noPosterImg from '../../images/no-poster.jpg';
import {
    MovieInfoWrapper,
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


export const ModalMovieInfo = ({ modalWidth }) => {
    return (
        <MovieInfoWrapper>
            <MoviePoster src={noPosterImg} alt="Movie poster" />
            {modalWidth < 768 &&
                <MobileMovieAttrList>
                    <MobileMovieAttr>Vote / Votes</MobileMovieAttr>
                    <MobileMovieAttrValue><MovieRaiting>9.0</MovieRaiting>&nbsp;/&nbsp;<VotedNum>7346</VotedNum></MobileMovieAttrValue>
                    <MobileMovieAttr>Popularity</MobileMovieAttr>
                    <MobileMovieAttrValue>Francisco Chang</MobileMovieAttrValue>
                    <MobileMovieAttr>Original</MobileMovieAttr>
                    <MobileMovieAttrValue><OriginNameValue>Roland Mendel</OriginNameValue></MobileMovieAttrValue>
                    <MobileMovieAttr>Genre</MobileMovieAttr>
                    <MobileMovieAttrValue>Helen Bennett</MobileMovieAttrValue>
                </MobileMovieAttrList>
            }
            <div>
                <MovieTitle>A FISTFUL OF LEAD</MovieTitle>
                {modalWidth >= 768 &&
                    <MovieAttrList>
                        <tbody>
                            <tr>
                                <MovieAttr>Vote / Votes</MovieAttr>
                                <MovieAttrValue><MovieRaiting>9.0</MovieRaiting>&nbsp;/&nbsp;<VotedNum>7346</VotedNum></MovieAttrValue>
                            </tr>
                            <tr>
                                <MovieAttr>Popularity</MovieAttr>
                                <MovieAttrValue>Francisco Chang</MovieAttrValue>
                            </tr>
                            <tr>
                                <MovieAttr>Original </MovieAttr>
                                <MovieAttrValue>
                                    <OriginNameValue>Roland Mendel</OriginNameValue>
                                </MovieAttrValue>
                            </tr>
                            <tr>
                                <MovieAttr>Genre</MovieAttr>
                                <MovieAttrValue>Helen Bennett</MovieAttrValue>
                            </tr>
                        </tbody>
                    </MovieAttrList>
                }
            
                <DescriptionSubtitle>about</DescriptionSubtitle>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, exercitationem excepturi! 
                    Maxime molestiae vel veniam. Ut magnam quia id facilis atque,
                    consequuntur saepe incidunt, cum obcaecati dolorum, quisquam maxime vitae! 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus illo quos fuga vel illum!
                    Quaerat beatae eaque voluptate modi nostrum nemo, odio, harum, quos velit ipsam officia quisquam esse.
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
            </div>
        </MovieInfoWrapper>
    )
}