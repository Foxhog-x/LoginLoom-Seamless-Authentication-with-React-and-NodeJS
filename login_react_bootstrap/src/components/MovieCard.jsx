/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import "../App.css";
import { motion } from "framer-motion";
export const MovieCard = ({ movie }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="grid_content_flex"
    >
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
      <span className="movie_title">{movie.original_title}</span>
    </motion.div>
  );
};
