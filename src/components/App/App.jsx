import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";
import { Main } from "components/Main/Main";
// import { MovieModal } from "components/MovieModal/MovieModal";

export const App = () => {
  const getSearchValue = text => {
    console.log(text);
  }

  return (
    <div>
      <Header searchValue={ getSearchValue } />
      <Main />
      {/* <MovieModal /> */}
      <Footer/>
    </div>
  );
};
