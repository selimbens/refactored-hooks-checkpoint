import { useEffect, useState } from "react";

const NewMovie = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setposterURL] = useState("");
  const [rating, setRating] = useState(0);


  useEffect(() => {
    handleChange()
  }, [name,description,posterURL, rating])

  const update = props.update;

  const quantity = props.quantity;

  function handleChange() {
    const newMovie = {
      id: quantity + 1,
      title: name,
      description: description,
      posterURL: posterURL,
      rating: rating,
    };
    update(newMovie);
  }

  return (
    <form>
      <label htmlFor="name">Film Title :</label>
      <input
        type="text"
        name="name"
        onChange={event => { setName(event.target.value) }} />
      <br />
      <label htmlFor="description">Movie Description :</label>
      <input
        type="text"
        name="description"
        onChange={event => { setDescription(event.target.value) }}
      />

      <br />
      <label htmlFor="photoURL">Photo URL :</label>
      <input
        type="url"
        name="photoURL"
        onChange={event => { setposterURL(event.target.value) }}
      />
      <br />

      <label htmlFor="rating">Movie rating :</label>
      <input
        type="number"
        name="rating"
        onChange={event => { setRating(event.target.value) }}
      />
      <br />
    </form>
  );
};

export default NewMovie;
