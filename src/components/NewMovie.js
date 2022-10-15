import { useState } from "react";

const NewMovie = (props) => {
    return (
        <form>
            <label htmlFor="name">Film Title :</label>
            <input
                type="text"
                name="name"
                // value={props.name}
                onChange={props.handleName}
            />
<br/>
            <label htmlFor="description">Movie Description :</label>
            <input
                type="text"
                name="description"
                // value={props.description}
                onChange={props.handleDescription}
            />

<br/>
            <label htmlFor="photoURL">Photo URL :</label>
            <input
                type="url"
                name="photoURL"
                // value={props.photoURL}
                onChange={props.handlephotoURL}
            />
<br/>

            <label htmlFor="rating">Movie rating :</label>
            <input
                type="number"
                name="rating"
                // value={props.rating}
                onChange={props.handleRating}
            />
<br/>
        </form>
    )
}

export default NewMovie