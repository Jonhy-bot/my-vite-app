import type { Movie } from "../../models/movie.model";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-6 px-2">
          <h2 className="text-2xl md:text-3xl font-semibold">Popular Movies</h2>
        </div>

        {/* Horizontal Scroll */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide px-2">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="flex-shrink-0 w-[180px] md:w-[220px]"
              >
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
