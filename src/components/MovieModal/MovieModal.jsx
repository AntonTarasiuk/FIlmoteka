import { createPortal } from "react-dom"
import {
    Backdrop,
    ModalWindow,
    ModalCloseBtn,
    MovieInfoWrapper,
    MoviePoster,
    MovieTitle,
    MovieAttrList,
    MovieAttr,
    MovieAttrValue,
    VotedNum,
    OriginNameValue,
    DescriptionSubtitle,
    Description,
    ModalBtnSet,
    ModalBtn
} from "./MovieModal.styled"
import { MovieRaiting } from "components/MovieItem/MovieItem.styled"
import noPosterImg from '../../images/no-poster.jpg'

import sprite from "../../images/sprite.svg"

const modalRoot = document.querySelector("#modal-root")

export const MovieModal = () => {
    return createPortal(
        <Backdrop>
            <ModalWindow>
                <ModalCloseBtn type="button" aria-label="close">
                    <svg width="30" height="30">
                        <use xlinkHref={`${sprite}#icon-close`} />
                    </svg> 
                </ModalCloseBtn>
                <MovieInfoWrapper>
                    <MoviePoster src={noPosterImg} alt="Movie poster" />
                    <div>
                        <MovieTitle>A FISTFUL OF LEAD</MovieTitle>
                        <MovieAttrList>
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
                        </MovieAttrList>
                        
                        <DescriptionSubtitle>about</DescriptionSubtitle>
                        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus illo quos fuga vel illum! Quaerat beatae eaque voluptate modi nostrum nemo, odio, harum, quos velit ipsam officia quisquam esse.</Description>
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
            </ModalWindow>
        </Backdrop>,
        modalRoot
    )
}