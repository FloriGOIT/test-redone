
import { Link } from 'react-router-dom';
import style from "../movieWebSite.module.scss";
import PropTypes from 'prop-types';

const Home = ({ movies}) => {
  return (
    <div className={style.movieList}>
      <h1>Trending movies</h1>  <br/> 
      <ul>
        {movies.map(movie => {
          const link = `/movies/${movie.id}`;
          return (
            <li key={movie.id} >
                          <Link to={link} >{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;

Home.propTypes = {
  movies:PropTypes.array
}
