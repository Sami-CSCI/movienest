import { useState } from "react";
import { Button } from "@/components/base/buttons/button";
import MovieCard from "../components/MovieCard";
import PageHeader from "../components/PageHeader";
import movies from "../data/movies";

const genres = ["All", "Action", "Sci-Fi", "Drama", "Comedy", "Animation"];

function Movies() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = genre === "All" || movie.genre === genre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div>
      <PageHeader
        label="Browse"
        title="All movies"
        text="Search by title or pick a genre. Click a movie to see more details."
      />

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {genres.map((item) => (
            <Button
              key={item}
              size="sm"
              color={genre === item ? "primary" : "secondary"}
              onClick={() => setGenre(item)}
            >
              {item}
            </Button>
          ))}
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies..."
          className="w-full rounded-lg border border-primary bg-primary px-3.5 py-2.5 text-primary shadow-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand md:w-72"
        />
      </div>

      {filteredMovies.length === 0 ? (
        <p className="py-10 text-center text-tertiary">No movies match your search.</p>
      ) : (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;
