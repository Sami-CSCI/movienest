import { useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { loadFavourites, saveFavourites } from "../favourites";
import "./Favourites.css";

function Favourites() {
  const [favourites, setFavourites] = useState(
    () => loadFavourites()
  );

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  function handleAddFavourite(event) {
    event.preventDefault();

    if (title.trim() === "" || genre.trim() === "") {
      alert("Please enter both a movie title and a genre.");
      return;
    }

    const newFavourite = {
      id: Date.now(),
      title: title.trim(),
      genre: genre.trim()
    };

    const updatedFavourites = [
      ...favourites,
      newFavourite
    ];

    setFavourites(updatedFavourites);
    saveFavourites(updatedFavourites);

    setTitle("");
    setGenre("");
  }

  function handleDeleteFavourite(id) {
    const updatedFavourites = favourites.filter(
      (item) => item.id !== id
    );

    setFavourites(updatedFavourites);
    saveFavourites(updatedFavourites);
  }

  return (
    <div className="favourites-box">
      <h1>My Favourite Movies</h1>
      <p className="intro">
        Add a movie and its genre. Your list is saved in this browser.
      </p>

      <form onSubmit={handleAddFavourite}>
        <label>
          Movie title
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter a movie title"
          />
        </label>

        <label>
          Genre
          <input
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
            placeholder="Enter a genre"
          />
        </label>

        <Button type="submit" className="w-fit">Add Favourite</Button>
      </form>

      <h2>Saved Favourites ({favourites.length})</h2>

      {favourites.length === 0 ? (
        <p>No favourites saved yet.</p>
      ) : (
        <ul className="favourite-list">
          {favourites.map((item) => (
            <li key={item.id}>
              <span>
                <strong>{item.title}</strong> - {item.genre}
              </span>

              <Button
                size="sm"
                color="secondary-destructive"
                onClick={() => handleDeleteFavourite(item.id)}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favourites;
