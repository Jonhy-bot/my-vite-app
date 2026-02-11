import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import type { Movie } from "../../models/movie.model";
import { getMovies } from "../../services/movies.services";

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-lg text-gray-400 animate-pulse">Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-red-500 text-lg">Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Page Title */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">Popular Movies</h1>
        <div className="w-20 h-1 bg-red-600 mt-3 rounded-full"></div>
      </div>

      {/* Movies */}
      <MovieList movies={movies} />
    </div>
  );
}
