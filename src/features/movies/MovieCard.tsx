import { Link } from "react-router-dom";
import type { Movie } from "../../models/movie.model";

type Props = { movie: Movie };

export default function MovieCard({ movie }: Props) {
  return (
    <Link
      to={`/movies/${movie.id}`}
      className="block group transition duration-300"
    >
      <div className="relative rounded-xl overflow-hidden shadow-lg shadow-black/40 group-hover:scale-110 group-hover:z-10 transition duration-300">
        <img
          src={movie.poster.trim()}
          alt={movie.title}
          className="w-full aspect-[2/3] object-cover"
          loading="lazy"
        />

        {/* Rating */}
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-amber-400 text-xs font-semibold px-2 py-1 rounded-md">
          ★ {movie.rating}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition duration-300">
          <h3 className="text-white font-semibold text-sm line-clamp-1">
            {movie.title}
          </h3>
          <p className="text-gray-300 text-xs mt-1">{movie.year}</p>
        </div>
      </div>
    </Link>
  );
}
