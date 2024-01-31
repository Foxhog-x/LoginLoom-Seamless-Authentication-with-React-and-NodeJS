import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import "../App.css";
import { Filter } from "../components/Filter";
import { motion } from "framer-motion";
// const token = process.env.TMDB;
const token = "hdsfs";
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
        {filterData?.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </motion.div>
    </>
  );
};
