import { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const SharedLayoutMovies = lazy(() => import('./pages/SharedLayoutMovies'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieSummery = lazy(() => import('./pages/MovieSummery'));
const Cast = lazy(() => import('./pages/Cast'));
const Review = lazy(() => import('./pages/Review'));

const MovieWebSite = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url =
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjgyOWZhMWY2NzdmMjkwZmQ3NTAyNWFmOGI0N2UyMSIsIm5iZiI6MTcxOTY3MjIzNC4zMDIsInN1YiI6IjY2ODAxZGFhMjhkMzA2OTI2NzViZTZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V6-Px6XK3mzZbcoyTrOmxgROWXW8xsyr0QzjUgkkxQk',
      },
    };

    fetch(url, options)
      .then(res => res.json())
      .then(data => setMovies([...data.results]))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <Suspense fallback={<div>Loading content...</div>}>
    <Routes>
      <Route path="/" element={<SharedLayoutMovies />}>
        <Route index element={<Home movies={movies} />}/>
        <Route path="movies" element={<Movies/>} />
        <Route path="movies/:id" element={<MovieSummery />}>
          <Route path="review" element={<Review />} />
          <Route path="cast" element={<Cast />} />
        </Route>
      </Route>
      </Routes>
      </Suspense>
          );
};

export default MovieWebSite;
