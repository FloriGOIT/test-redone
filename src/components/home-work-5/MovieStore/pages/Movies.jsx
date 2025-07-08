import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';


const Movies = () => {
        const [infoArr, setInfoArr] = useState([]);
        const [searchParams, setSearchParams] = useSearchParams();
        const query = searchParams.get("query") || ""

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjgyOWZhMWY2NzdmMjkwZmQ3NTAyNWFmOGI0N2UyMSIsIm5iZiI6MTcxOTY3MjIzNC4zMDIsInN1YiI6IjY2ODAxZGFhMjhkMzA2OTI2NzViZTZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V6-Px6XK3mzZbcoyTrOmxgROWXW8xsyr0QzjUgkkxQk',
      },
    };
    fetch(URL, options)
      .then(response => response.json())
      .then(data => setInfoArr([...data.results]))
      .catch(error => console.log(error));
  }, [query]);
  const handleQuery = e => {
    e.preventDefault();
    setSearchParams({query:e.currentTarget.elements.movieInput.value});
    e.currentTarget.reset();
  };
  return (
    <div>
      <form onSubmit={handleQuery}>
        <input
          type="text"
          name="movieInput"
          style={{
            fontSize: '24px',
            paddingLeft: 15,
            paddingTop: 5,
            paddingBottom: 5,
          }}
        />
        <button type="submit" style={{ fontSize: '25px' }}>
          ♥️
        </button>
      </form>
      <br />
      <div>
        <ul style={{ paddingLeft: 20 }}>
        {infoArr.map(movie => {const site = `/movies/${movie.id}`;                         
                               return (<li key={site}><Link to={site}>{movie.title}</Link></li>)})}
        </ul>
      </div>
    </div>
  );
};

export default Movies;

