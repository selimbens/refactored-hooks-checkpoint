// Instructions
// Create the following components:
// MovieCard
// MovieList
// Filter ( title, rate)
// Every movie should have the following attributes: title, description, posterURL, rating
// The user should be:
// OK Able to add a new movie.
// // Filter the movies with title/rating.

import MovieCard from "./MovieCard"

export default function MovieList(props) {
    const filteredList = props.filteredList

  return (
    <div className="card-group">
        {
            filteredList.map((v) => (
            <MovieCard
              key={v.id}
              posterURL={v.posterURL}
              title={v.title}
              description={v.description}
              rating={v.rating}
            />
          ))}
      </div>
  )
}
