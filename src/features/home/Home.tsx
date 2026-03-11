import { Link } from "react-router-dom";

export function Home() {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Efectos de fondo sutil */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600 rounded-full filter blur-3xl opacity-15 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Contenido principal */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Columna izquierda */}
            <div className="text-left space-y-10">
              {/* Badge premium HBO style */}
              <div className="inline-block">
                <span className="px-6 py-3 bg-violet-600 text-white text-sm font-bold rounded-lg shadow-lg border border-violet-500/30">
                  ⚡ EXPERIENCIA PREMIUM
                </span>
              </div>

              {/* Título HBO Max style */}
              <div>
                <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-4">
                  MOVIE
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
                    APP
                  </span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-violet-500 to-transparent rounded-full mt-6"></div>
              </div>

              <p className="text-2xl text-gray-300 leading-relaxed max-w-xl">
                Descubre historias que definen generaciones, con calidad
                cinematográfica y una experiencia inmersiva.
              </p>

              {/* Botones HBO style */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link
                  to="/movies"
                  className="group relative px-10 py-5 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                >
                  <span className="relative flex items-center justify-center gap-3">
                    <span>▶</span>
                    <span>EXPLORAR AHORA</span>
                  </span>
                </Link>

                <button className="px-10 py-5 bg-transparent text-violet-400 font-bold text-xl rounded-lg border-2 border-violet-500 hover:bg-violet-500/10 transition-colors">
                  VER DESTACADAS
                </button>
              </div>

              {/* Estadísticas minimalistas */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-5xl font-black text-cyan-400 mb-2">
                    10K+
                  </div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">
                    Películas
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-violet-500 mb-2">
                    50K+
                  </div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">
                    Reseñas
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-white mb-2">
                    4.8★
                  </div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">
                    Rating
                  </p>
                </div>
              </div>
            </div>

            {/* Columna derecha - Imagen con marco HBO */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Glow sutil */}
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>

                {/* Frame principal */}
                <div className="relative bg-gradient-to-br from-violet-900/30 to-cyan-900/30 rounded-3xl p-2 backdrop-blur-sm border border-violet-500/30">
                  <div className="relative rounded-2xl overflow-hidden">
                    {/* Imagen de respaldo (siempre funciona) */}
                    <img
                      src="https://media.telebajocero.com/p/89d83de34bdfb44d96a719d575bbc0bf/adjuntos/225/imagenes/000/905/0000905067/1200x675/smart/hbo-maxjpg.jpg"
                      alt="Colección de películas"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Badges HBO style */}
                <div className="absolute -top-6 -right-6 bg-violet-600 text-white px-6 py-3 rounded-full font-bold shadow-xl border border-violet-400">
                  🔥 HOT
                </div>

                <div className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-md text-cyan-400 px-6 py-4 rounded-2xl border border-cyan-500/50">
                  <p className="text-sm font-bold">⭐ TENDENCIAS 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior sutil */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-30"></div>
    </section>
  );
}
