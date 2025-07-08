import { BrowserRouter } from 'react-router-dom';
import MovieWebSite from './MovieStore/MovieWebSite';

const AppMovieStore = () => {
  return (
    <BrowserRouter basename="/react-homework-template">
      <MovieWebSite />
    </BrowserRouter>
  );
};
export default AppMovieStore;
