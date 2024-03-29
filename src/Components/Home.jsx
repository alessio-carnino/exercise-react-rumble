import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
const apiKey = import.meta.env.VITE_API_KEY;

export default () => {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  const getMovies = async () => {
    try {
      const searchParams = new URLSearchParams({ apiKey });
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
      const response = await fetch(url);
      if (response.status > 299) {
        throw new Error(
          `Response has a problem. Status code: ${response.status}`
        );
      }
      const obj = await response.json();
      setMovies(obj.results);
    } catch (error) {
      console.error(errorMessage);
      setErrorMessage("Error, try again.");
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main className="cards-wrapper">
      {movies.slice(0, 4).map((m) => (
        <MovieCard
          key={m.id}
          id={m.id}
          image={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
          title={m.title}
          year={m.release_date}
          overview={m.overview}
        />
      ))}
    </main>
  );
};
