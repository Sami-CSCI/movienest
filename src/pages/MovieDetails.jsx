import { useState } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import Poster from "../components/Poster";
import movies from "../data/movies";
import { loadFavourites, saveFavourites } from "../favourites";

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((item) => item.id === Number(id));

  const [saved, setSaved] = useState(
    () => loadFavourites().some((item) => item.title === movie?.title)
  );

  if (!movie) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-primary">Movie not found</h1>
        <Button href="#/movies" className="mt-6">Back to movies</Button>
      </div>
    );
  }

  function handleSave() {
    const favourites = loadFavourites();
    const newFavourite = {
      id: Date.now(),
      title: movie.title,
      genre: movie.genre
    };

    saveFavourites([...favourites, newFavourite]);
    setSaved(true);
  }

  return (
    <div className="grid gap-10 md:grid-cols-[280px_1fr]">
      <div className="mx-auto w-full max-w-[280px]">
        <Poster title={movie.title} year={movie.year} colors={movie.colors} />
      </div>

      <div>
        <Button href="#/movies" color="link-gray" size="sm">← All movies</Button>
        <h1 className="mt-4 text-3xl font-bold text-primary md:text-4xl">{movie.title}</h1>

        <div className="mt-4 flex flex-wrap gap-2">
          <Badge color="brand">{movie.genre}</Badge>
          <Badge color="gray">{movie.year}</Badge>
          <Badge color="gray">{movie.duration}</Badge>
          <Badge color="warning">★ {movie.rating.toFixed(1)}</Badge>
        </div>

        <p className="mt-6 max-w-xl text-lg text-tertiary">{movie.description}</p>
        <p className="mt-4 text-secondary">
          <span className="font-semibold">Director:</span> {movie.director}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" onClick={handleSave} isDisabled={saved}>
            {saved ? "Saved to favourites" : "Add to favourites"}
          </Button>
          <Button size="lg" color="secondary" href="#/favourites">
            View favourites
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
