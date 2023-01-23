import { Header } from "components/Header/Header";
import { MovieList } from "components/MovieList/MovieList";
import { Footer } from "components/Footer/Footer";


export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Header/>
      <MovieList/>
      <Footer/>
    </div>
  );
};
