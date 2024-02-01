import { useEffect } from "react";
import Button from "react-bootstrap/Button";

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
    if (activeGenre === 16) {
      const filterByAction = apiData.filter((value) =>
        value.genre_ids.includes(activeGenre)
      );
      setFilterData(filterByAction);
    }
    if (activeGenre === 10751) {
      const filterByAction = apiData.filter((value) =>
        value.genre_ids.includes(activeGenre)
      );
      setFilterData(filterByAction);
    }
  }, [activeGenre]);

  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <Button
        className="Muted link"
        onClick={() => setActiveGenre(0)}
        value={12}
      >
        All
      </Button>
      <Button onClick={() => setActiveGenre(12)}>Action</Button>
      <Button onClick={() => setActiveGenre(16)}>Animation</Button>
      <Button onClick={() => setActiveGenre(10751)}>Family</Button>
    </div>
  );
};
