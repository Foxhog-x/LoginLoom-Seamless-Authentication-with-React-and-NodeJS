import { useEffect } from "react";

/* eslint-disable react/prop-types */
export const Filter = ({
  apiData,
  setActiveGenre,
  setFilterData,
  activeGenre,
}) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFilterData(apiData);
      return;
    }
    if (activeGenre === 12) {
      const filterByAction = apiData.filter((value) =>
        value.genre_ids.includes(activeGenre)
      );

      setFilterData(filterByAction);
    }
  }, [activeGenre]);

  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <button onClick={() => setActiveGenre(0)} value={12}>
        All
      </button>
      <button onClick={() => setActiveGenre(12)}>Action</button>
      <button onClick={() => setActiveGenre(2)}>Thriller</button>
    </div>
  );
};
