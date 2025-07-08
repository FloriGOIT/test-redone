import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
  const params = useParams();
  const movieId = params.id;
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
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
      .then(data => setInfo([...data.results]))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div>
      <br />
      <h3>Top reviews</h3>
      <ul>
        {info.length !== 0 ? (
          info.map(review => (
            <li key={review.author}>
              <span>{review.author}</span>
              <br />
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>No review</p>
        )}
      </ul>
    </div>
  );
};

export default Review;
