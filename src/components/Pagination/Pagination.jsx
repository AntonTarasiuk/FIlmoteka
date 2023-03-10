import { PaginatorBtns, PageBtns } from "./Pagination.styled";
import sprite from "../../images/sprite.svg";

export const Paginator = () => {
    return (
            <PaginatorBtns>
                <PageBtns type="button" id="prevPage">
                    <svg width="16" height="16">
                        <use xlinkHref={`${sprite}#icon-pagination-left`} />
                    </svg>
                </PageBtns>
                <PageBtns type="button">1</PageBtns>
                <PageBtns type="button">2</PageBtns>
                <PageBtns type="button">3</PageBtns>
                <PageBtns type="button">4</PageBtns>
                <PageBtns type="button">5</PageBtns>
                <PageBtns type="button" id="nextBtns">
                    <svg width="16" height="16">
                        <use xlinkHref={`${sprite}#icon-pagination-right`} />
                    </svg>
                </PageBtns>
            </PaginatorBtns>
    )
}