import type { Movie } from "../models/movie.model";

const MOVIES_URL = "/Data/movies.json";

export async function getMovies(): Promise<Movie[]> {
  const response = await fetch(MOVIES_URL);
  if (!response.ok) throw new Error("Error al cargar películas");
  const data = await response.json();
  return data.movies as Movie[];
}

export async function getMovieById(id: string): Promise<Movie | null> {
  const movies = await getMovies();
  return movies.find((m) => String(m.id) === id) || null;
}
