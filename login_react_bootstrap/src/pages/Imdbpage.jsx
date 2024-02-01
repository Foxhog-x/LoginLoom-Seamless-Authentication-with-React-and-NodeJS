import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import "../App.css";
import { Filter } from "../components/Filter";
import { motion, AnimatePresence } from "framer-motion";
// const token = process.env.TMDB;
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDQ4NzUzNDhhNGUxNDM0NWY3ZjU1ZTdlMTQwNjQzNyIsInN1YiI6IjY1YThiMzllNmY5NzQ2MDEzN2Q4ZWJmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.537GvbqXljt0a12j3tHk3NFOXtwJv7ZcuNJzB82Tbic";
export const Imdbpage = () => {
  const [apiData, setapiData] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    function fetchMovies() {
      fetch("https://api.themoviedb.org/3/movie/popular", {
        method: "get",
        headers: {
          "Content-Type": "json/application",
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setapiData(data.results);
          setFilterData(data.results);
        });
      console.log(apiData);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <div className="center">
        <Filter
          apiData={apiData}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
          setFilterData={setFilterData}
        />
      </div>

      <motion.div animate={{ y: "500" }} className="grid_movie">
        <AnimatePresence>
          {filterData?.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
