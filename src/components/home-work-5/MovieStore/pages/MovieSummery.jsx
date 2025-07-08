import { useEffect, useState } from 'react';
import style from '../movieWebSite.module.scss';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';



const MovieSummery = () => {
  const params = useParams();
  const [infoMovie, setInfoMovie] = useState("")
  const movieSearch = params.id
  const URL = `https://api.themoviedb.org/3/movie/${movieSearch}?language=en-US`;


  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjgyOWZhMWY2NzdmMjkwZmQ3NTAyNWFmOGI0N2UyMSIsIm5iZiI6MTcxOTY3MjIzNC4zMDIsInN1YiI6IjY2ODAxZGFhMjhkMzA2OTI2NzViZTZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V6-Px6XK3mzZbcoyTrOmxgROWXW8xsyr0QzjUgkkxQk"
      }
    }
  
      fetch(URL, options)
      .then(response => response.json())
        .then(data => setInfoMovie({...data}))
        .catch(error => console.log(error))

  }, [URL])
  
  
  if (infoMovie !== "") {
    const fullSrc = `https://image.tmdb.org/t/p/w500` + infoMovie.poster_path;
    const vote = Math.round(infoMovie.popularity);
    const genresIds = infoMovie.genres;
    let x = [];
    for (const info of genresIds) x.push(info.name);
  
    

  return (
    <section className={style.detailsAll}>
             <div className={style.detailsUp}>
        <div>
          <Link to="/">Go back</Link> <br />
          <img
            src={fullSrc}
            alt={infoMovie.original_title}
            style={{ width: '400px', objectFit: 'contain' }}
          />
        </div>

        <div style={{ width: '400px' }}>
          <h2>{infoMovie.original_title}</h2> 
          <p>People vote: {vote} %</p>
          <br />
          <h2>Overview</h2>
          <p>{infoMovie.overview}</p> <br />
          <h2>Genre</h2>
          <p>{x.join(", ")}</p>
        </div>
      </div>
      <hr />
      <br />

      <div className={style.detailsDown}>
        <h2>Additional Info</h2>
        <div>
          <Link to="review">Review</Link>
          <br />
          <Link to="cast">Cast</Link>
          <br />
          <Suspense fallback={<div>Loading content....</div>}>
          
            <Outlet />
            </Suspense>
        </div>
      </div>
    </section>
  );}
};
export default MovieSummery;

