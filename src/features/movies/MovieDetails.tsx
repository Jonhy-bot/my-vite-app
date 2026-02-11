import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Movie } from "../../models/movie.model";
import { getMovieById } from "../../services/movies.services";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (id) {
      getMovieById(id).then(setMovie);
    }
  }, [id]);

  if (!movie) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">Película no encontrada</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div
        className="h-96 bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${movie.poster.trim()})` }}
      >
        <div className="bg-gradient-to-t from-black to-transparent w-full py-12 px-6">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="text-gray-300 mt-2">
            {movie.year} • {movie.genre} • ★ {movie.rating}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          {movie.description}
        </p>
        <p className="mt-4 text-gray-400">
          Director: <span className="text-white">{movie.director}</span>
        </p>
      </div>
    </div>
  );
}
