import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";
import { Main } from "components/Main/Main";
import { MovieModal } from "components/MovieModal/MovieModal";

export const App = () => {
  return (
    <div>
      <Header/>
      <Main />
      <MovieModal />
      <Footer/>
    </div>
  );
};
