import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";
import { Main } from "components/Main/Main";
import { Modal } from "components/Modal/Modal";
import { ModalMovieInfo } from "components/ModalMovieInfo/ModalMovieInfo";
import { useEffect, useState } from "react";

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchValue, getSearchValue] = useState("")
  const [width, setWidth] = useState(window.innerWidth);
  const [ratio, setRatio] = useState(window.devicePixelRatio);

  useEffect(() => {
    function handleWindowResize() {
        setWidth(window.innerWidth);
        setRatio(window.devicePixelRatio);       
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [setWidth, setRatio]);

  return (
    <div>
      <Header width={width} ratio={ratio} searchValue={ getSearchValue } />
      <Main openModalClick={() => setShowModal(!showModal)} searchValue={searchValue} />
      {showModal &&
        <Modal closeModal={() => setShowModal(!showModal)}>
          <ModalMovieInfo modalWidth={width}/>
        </Modal>
      }
      <Footer/>
    </div>
  );
};
