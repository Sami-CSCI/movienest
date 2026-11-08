import { Link } from "react-router-dom";
import { Badge } from "@/components/base/badges/badges";
import Poster from "./Poster";

function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`} className="group flex flex-col gap-3">
      <div className="transition duration-200 group-hover:-translate-y-1">
        <Poster title={movie.title} year={movie.year} colors={movie.colors} />
      </div>
      <div className="flex items-center justify-between">
        <Badge color="brand" size="sm">
          {movie.genre}
        </Badge>
        <span className="text-sm font-semibold text-secondary">★ {movie.rating.toFixed(1)}</span>
      </div>
    </Link>
  );
}

export default MovieCard;
