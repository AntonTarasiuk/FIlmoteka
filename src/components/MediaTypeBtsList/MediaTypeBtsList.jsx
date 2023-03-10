import { Btns, BtnItem, Btn } from "components/TrendsBtnList/TrendsBtnList.styled"

export const MediaTypeBtnList = ({ setMediaType, mediaType, setSearchParam, searchParam }) => {
    const handleCkick = e => {
        const {name} = e.currentTarget
       
        mediaType === name ? setMediaType("all") : setMediaType(name);
        searchParam === name ? setSearchParam("multi") : setSearchParam(name);
    }

    return (
        <Btns>
            <BtnItem>
                <Btn name='movie' id="button-color-week" onClick={handleCkick}>
                    Movies 
                </Btn>
            </BtnItem>
            <BtnItem>
                <Btn name='tv' id="button-color-week" onClick={handleCkick}>
                    TV Shows 
                </Btn>
            </BtnItem>
        </Btns>
    )
    
}