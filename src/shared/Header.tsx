import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-violet-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo HBO Max style */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-3xl font-black text-white">
              MOVIE
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
                APP
              </span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/movies"
              className="text-white hover:text-cyan-400 font-medium transition-colors duration-200 relative group"
            >
              Movies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a
              href="#"
              className="text-white hover:text-cyan-400 font-medium transition-colors duration-200 relative group"
            >
              Tendencias
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="text-white hover:text-cyan-400 font-medium transition-colors duration-200 relative group"
            >
              Mi Lista
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Botones de acción */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-white hover:text-cyan-400 transition-colors duration-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Sign In */}
            <button className="hidden sm:block px-6 py-2 text-white hover:text-cyan-400 font-medium transition-colors duration-200">
              Sign In
            </button>

            {/* Subscribe - Premium Button HBO style */}
            <button className="relative px-6 py-2 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold rounded-lg group">
              <span className="relative flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                Premium
              </span>
            </button>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-white hover:text-cyan-400 transition-colors duration-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Barra decorativa inferior HBO style */}
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-30"></div>
    </header>
  );
}
