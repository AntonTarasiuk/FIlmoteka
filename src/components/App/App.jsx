import { Header } from "components/Header/Header";
import { MovieList } from "components/MovieList/MovieList";
import { Footer } from "components/Footer/Footer";


export const App = () => {
  return (
    <div>
      <Header/>
      <MovieList/>
      <Footer/>
    </div>
  );
};
