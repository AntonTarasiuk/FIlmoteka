import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";
import { Main } from "components/Main/Main";
import { useEffect, useState } from "react";
import { apiTrandingMovies, apiMovieSearch, apiGetMovieById } from "services/apiMovies";
import { Modal } from "components/Modal/Modal";
import { ModalMovieInfo } from "components/ModalMovieInfo/ModalMovieInfo";

// const API_KEY = 'b19e6b2986fc1ae4c290daa4cefec337';
// const BASE_URL = 'https://api.themoviedb.org/3/';

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);
  const [ratio, setRatio] = useState(window.devicePixelRatio);
  const [mediaType, setMediaType] = useState("movie");
  const [timeWindow, setTimeWindow] = useState("day");
  const [query, setQuery] = useState([]);
  const [searchParam, setSearchParam] = useState("multi");
  const [showPagination, setShowPagination] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState('');
  const [modalMovie, setModalMovie] = useState(null);
  // console.log(modalMovie)

  useEffect(() => {
    // eslint-disable-next-line no-sequences
    apiTrandingMovies(mediaType, timeWindow).then(res => (setQuery(res.results), res.total_pages > 1 && setShowPagination(true)));
  }, [mediaType, timeWindow])
  // console.log(selectedMovieId)

  useEffect(() => {
    searchValue !== "" &&
    apiMovieSearch(searchValue, page, searchParam).then(res => setQuery(res.results));
  }, [page, searchParam, searchValue])

  useEffect(() => {
    selectedMovieId &&
    apiGetMovieById(selectedMovieId, mediaType).then(res => setModalMovie(res));
  }, [mediaType, selectedMovieId])

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
      <Header width={width} ratio={ratio} searchValue={(value) => setSearchValue(value)} />
      <Main
        openModalClick={() => setShowModal(!showModal)}
        movieForRender={query}
        closeModal={() => setShowModal(!showModal)}
        showModal={showModal}
        modalWidth={width}
        setTimeWindow={setTimeWindow}
        mediaType={mediaType}
        setMediaType={setMediaType}
        searchParam={searchParam}
        setSearchParam={setSearchParam}
        pageNumber={setPage}
        showPagination={showPagination}
        setSelectedMovieId={setSelectedMovieId}
        modalMovie={modalMovie}
      />
      <Footer />
      {showModal &&
          <Modal closeModal={() => setShowModal(!showModal)}>
              <ModalMovieInfo modalWidth={width} modalMovie={modalMovie} />
          </Modal>
      }
    </div>
  );
};
