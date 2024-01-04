import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const apiKey = import.meta.env.VITE_API_KEY;

export default () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [message, setMessage] = useState();

  const getMovie = async () => {
    try {
      if (id === undefined) {
        return;
      }
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
      const response = await fetch(url);
      if (response.status > 299) {
        throw new Error(
          `Response has a problem. Status code: ${response.status}`
        );
      }
      const obj = await response.json();
      setMovie(obj);
    } catch (error) {
      console.error(message);
      setMessage("Error, try again.");
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      {id === undefined ? (
        <p>{message}</p>
      ) : (
        <div className="page-card">
          <h2>{movie.original_title}</h2>
          <figure>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          </figure>

          <p>{movie.release_date}</p>
          <p>{movie.overview}</p>
        </div>
      )}
    </>
  );
};
