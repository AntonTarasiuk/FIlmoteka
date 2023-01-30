import { BtnList, BtnItem, LibraryBtn } from "./HeaderLibraryBtns.styled";

export const HeaderLibraryBtns = () => {
    return (
        <BtnList>
            <BtnItem>
                <LibraryBtn id="header-libraryWatched__btn">
                    Watched
                </LibraryBtn>
            </BtnItem>
            <BtnItem>
                <LibraryBtn id="header-libraryQueue__btn">
                    Queue
                </LibraryBtn>
            </BtnItem>
        </BtnList>
    )
}