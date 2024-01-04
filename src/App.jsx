import "./App.scss";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import MovieCard from "./Components/MovieCard";
import MoviePage from "./Components/MoviePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="movie">
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MoviePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
