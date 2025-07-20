import { Link } from 'react-router-dom';
import fredericImg from '../assets/profile_picture.jpg';

function Home() {
  return (
    <div className="flex flex-col">
      <div className="bg-black text-white min-h-screen flex flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-full bg-black">
          {/* Image à gauche */}
          <div className="flex flex-col justify-center items-center">
            <img
              src={fredericImg}
              alt="Frédéric Kah"
              className="rounded-full w-1/2 aspect-square object-cover border-2 border-gray-400 
                        transform transition-transform duration-300 hover:scale-105 animate-fadeIn"
            />
          </div>

          {/* Texte + bouton à droite */}
          <div className="flex flex-col justify-center items-center animate-fadeInRight">
            <h1 className="text-8xl md:text-8xl font-bold">Frédéric Kah</h1>
            <p className="mt-4 text-gray-400 text-xl max-w-2xl text-center md:text-right">
              Développeur.
            </p>

            {/* Bouton */}
            <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-end">
              <Link
                to="/projects"
                className="inline-block mt-6 px-6 py-2 border border-white text-white rounded 
                          hover:bg-white hover:text-black transition-colors duration-300 shadow-md"
              >
                Voir mes projets
              </Link>
              <a
                href="./files/frederic_kah_cv.pdf"
                download
                className="inline-block mt-6 px-6 py-2 border border-white text-white rounded 
                          hover:bg-white hover:text-black transition-colors duration-300 shadow-md"
              >
                Télécharger mon CV
              </a>
              <Link
                to="/contact"
                className="inline-block mt-6 px-6 py-2 border border-white text-white rounded 
                          hover:bg-white hover:text-black transition-colors duration-300 shadow-md"
              >
                Me Contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white min-h-screen flex flex-row items-center justify-center">
        <div className="bg-gradient-to-b from-black via-zinc-960 to-black text-white items-start justify-center p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-full">
            <div className="w-full max-w-6xl flex flex-col items-center space-y-16">
              <h2 className="items-start text-5xl md:text-6xl font-bold">Compétences</h2>
              {/* Grille des langages */}
              <div className="text-center text-white">
                <h3 className="text-2xl font-semibold">Langages</h3>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-6 text-5xl justify-items-center p-4">
                  <i className="devicon-python-plain colored hover:scale-110 transition-transform" title="Python"></i>
                  <i className="devicon-c-plain colored hover:scale-110 transition-transform" title="C"></i>
                  <i className="devicon-cplusplus-plain colored hover:scale-110 transition-transform" title="C++"></i>
                  <i className="devicon-csharp-plain colored hover:scale-110 transition-transform" title="C#"></i>
                  <i className="devicon-javascript-plain colored hover:scale-110 transition-transform" title="JavaScript"></i>
                  <i className="devicon-godot-plain colored hover:scale-110 transition-transform" title="GDScript"></i>
                  <i className="devicon-ocaml-plain colored hover:scale-110 transition-transform" title="OCaml"></i>
                </div>
              </div>
              

              {/* Grille des outils */}
              <div className="text-center text-white mt-10">
                <h3 className="text-2xl font-semibold">Technologies & outils</h3>
                <div className="grid grid-cols-4 md:grid-cols-5 gap-6 text-5xl justify-items-center p-4">
                  <i className="devicon-sqlite-plain colored hover:scale-110 transition-transform" title="SQL"></i>
                  <i className="devicon-react-original colored hover:scale-110 transition-transform" title="React"></i>
                  <i className="devicon-tailwindcss-plain colored hover:scale-110 transition-transform" title="TailwindCSS"></i>
                  <i className="devicon-git-plain colored hover:scale-110 transition-transform" title="Git"></i>
                  <i className="devicon-bash-plain colored hover:scale-110 transition-transform" title="Bash"></i>
                </div>
              </div>
            </div>
            
            <div className="w-full max-w-6xl flex flex-col items-center space-y-16">
              <h2 className="items-start text-5xl md:text-6xl font-bold">Formation</h2>

              <div className="w-full max-w-4xl flex flex-col gap-8 text-left text-white">
                {/* EURECOM */}
                <div>
                  <h3 className="text-2xl font-semibold">EURECOM – École d’ingénieur</h3>
                  <p className="text-gray-400">2024 – Aujourd’hui</p>
                  <p className="mt-1 text-gray-300">
                    Étudiant en ingénierie informatique, spécialisation en systèmes embarqués et intelligence artificielle.
                  </p>
                </div>

                {/* Lycée Charlemagne */}
                <div>
                  <h3 className="text-2xl font-semibold">Lycée Charlemagne – CPGE MP</h3>
                  <p className="text-gray-400">2022 – 2024</p>
                  <p className="mt-1 text-gray-300">
                    Classes préparatoires aux grandes écoles – Mathématiques et Physique (filière MP).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;