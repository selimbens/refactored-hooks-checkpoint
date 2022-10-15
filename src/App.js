import MovieCard from "./components/MovieCard";
import Button from "react-bootstrap/Button";
import "./App.css";
import { useEffect, useState } from "react";
import NewMovie from "./components/NewMovie";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import data from "./data.json"



function App() {

  const movieList = data

  const [listOfMovies, setList] = useState(movieList);
  const [filteredList, setFilteredList] = useState([]);
  const [newMovie, setNewMovie] = useState({})


  useEffect(() => {
    setFilteredList(listOfMovies)
  } , [listOfMovies])

  const handleList = () => {
    setList((previous) => [newMovie, ...previous]);
  };

  function updateNewMovie(object) {
    setNewMovie(object)
  }

  function filterList(newList) {
    setFilteredList(newList)
  }

  return (
    <div className="appbody">
      <h1>Hooks Checkpoint Flix</h1>
      <div className="newmovie">
        <NewMovie update={(object) => updateNewMovie(object)} quantity={listOfMovies.length} />
        <Button variant="primary" onClick={handleList}>
          Add New movie
        </Button>
      </div>
      <Filter list={listOfMovies} updateList={filterList} />
      <MovieList filteredList={filteredList} />
    </div>
  );
}

export default App;

// Instructions:
// Create the following components:
// OK MovieCard
// OK MovieList
// Filter ( title, rate)
// OK Every movie should have the following attributes: title, description, posterURL, rating
// The user should be:
// OK Able to add a new movie.
// OK Filter the movies with title/rating.