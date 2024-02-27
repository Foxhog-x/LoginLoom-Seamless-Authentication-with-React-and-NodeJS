import { useState } from "react";

export const Starratingpage = ({ noofStars = 5 }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(0);
  const handleMouseMove = (getElementIndex) => {
    setHover(getElementIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
    console.log(rating);
  };

  const handleSelected = (getIndexofElement) => {
    setRating(getIndexofElement);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
        gap: "5px",
      }}
    >
      {[...Array(noofStars)].map((_, index) => {
        // index += 1;
        return (
          <span
            key={index}
            id="star"
            className={index <= (hover || rating) ? "show" : "hidden"}
            onClick={() => handleSelected(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
          ></span>
        );
      })}
    </div>
  );
};
