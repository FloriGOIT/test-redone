
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const params = useParams()
  const movieId = params.id
const [info, setInfo] = useState([])
  useEffect(() => { 

    const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjgyOWZhMWY2NzdmMjkwZmQ3NTAyNWFmOGI0N2UyMSIsIm5iZiI6MTcxOTY3MjIzNC4zMDIsInN1YiI6IjY2ODAxZGFhMjhkMzA2OTI2NzViZTZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V6-Px6XK3mzZbcoyTrOmxgROWXW8xsyr0QzjUgkkxQk"
      }
    }
    fetch(URL, options)
      .then(response => response.json())
      .then(data => setInfo([...data.cast]))
    .catch(error => console.log(error))

  }, [movieId])
  

  const acting = info.filter(
    movies => movies.known_for_department === 'Acting'
  );
  const actorsName = [];
  for (const actor of acting) {
    actorsName.push(actor.name);
  }


  

  return (
    <div>
                  <br />
                  <h3>Actors name:</h3>
      <ul>
        {actorsName.map(actor => (
          <li key={actor}>{actor}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
