import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies";

function Home() {
  const topMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <div>
      <section className="flex flex-col items-center py-12 text-center md:py-20">
        <Badge color="brand" type="pill-color">Your personal movie list</Badge>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-primary md:text-6xl">
          Find a movie, save it, watch it later.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-tertiary md:text-xl">
          MovieNest helps you stop scrolling for hours. Browse good movies, read a short summary and keep your
          favourites in one place.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="xl" href="#/movies">Browse movies</Button>
          <Button size="xl" color="secondary" href="#/favourites">My favourites</Button>
        </div>
      </section>

      <section className="py-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-primary">Top rated</h2>
          <Button color="link-color" href="#/movies">See all →</Button>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {topMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
