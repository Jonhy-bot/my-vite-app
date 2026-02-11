import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./shared/Header";
import { Home } from "./features/home/Home";
import Movies from "./features/movies/Movies";
import MovieDetails from "./features/movies/MovieDetails";
import { Footer } from "./shared/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#141414] text-white">
        <Header />

        <main className="flex-1 px-6 md:px-12 lg:px-20 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
