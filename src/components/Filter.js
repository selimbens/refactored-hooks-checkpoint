import { movieList } from "./MovieList";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import "./Filter.css";

const Filter = (props) => {
  const [ratingSearch, setratingSearch] = useState(0);
  const handleRatingSearch = (e) => setratingSearch(e.target.value);
  const [titleSearch, setTitleSearch] = useState("");
  const handleTitleSearch = (e) => setTitleSearch(e.target.value);

  useEffect(() => {
    props.updateList(filteredList)
  } , [titleSearch, ratingSearch])


  const filteredList = props.list.filter(
    (movie) =>
      movie.title.toLocaleLowerCase().includes(titleSearch.toLocaleLowerCase()) &&
      movie.rating >= ratingSearch
  );

  return (
    <div className="filterBody">
      <div className="filterForm">
        <form>
          <label htmlFor="rateValue">Filter by rating :</label>
          <input
            type="number"
            name="rateValue"
            // value={props.name}
            onChange={handleRatingSearch}
          />
        </form>

        <form>
          <label htmlFor="titleValue">Filter by Title :</label>
          <input
            type="text"
            name="titleValue"
            // value={props.name}
            onChange={handleTitleSearch}
          />
        </form>
      </div>
    </div>
  );
};
export default Filter;
