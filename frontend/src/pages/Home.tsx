import { Link } from "react-router";
import TechStack from "../components/TechStack";
import EducationTimeline from "../components/EducationTimeline";
import fredericImg from "../assets/profile_picture.jpg";

function Home() {
  return (
    <>
      <div className="min-h-[calc(100vh-64px)] flex flex-row items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-full">
          {/* Image à gauche */}
          <div className="flex p-8 flex-col justify-center items-center">
            <img
              src={fredericImg}
              alt="Frédéric Kah"
              className="rounded-full w-1/2 aspect-square object-cover border-2 border-base-200 
                        transform transition-transform duration-300 hover:scale-105 animate-fadeIn"
            />
          </div>

          {/* Texte + bouton à droite */}
          <div className="flex flex-col justify-center items-center animate-fadeInRight">
            <h1 className="text-6xl font-bold">Frédéric Kah</h1>
            <p className="mt-4 text-xl max-w-2xl text-center md:text-right">
              Ingénieur Informaticien
            </p>

            {/* Bouton */}
            <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="btn btn-outline border rounded 
                          hover:bg-white hover:text-black transition-colors duration-300 shadow-md"
              >
                Voir mes projets
              </Link>
              <a
                href="../../public/docs/frederic_kah_cv.pdf"
                download
                className="btn btn-outline border rounded 
                          hover:bg-white hover:text-black transition-colors duration-300 shadow-md"
              >
                Télécharger mon CV
              </a>
              <Link
                to="/contact"
                className="btn btn-outline border rounded 
                          hover:bg-white hover:text-black transition-colors duration-300 shadow-md"
              >
                Me Contacter
              </Link>
            </div>
            <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-end">
              <a
                href="#skills"
                className="btn btn-outline border rounded 
                          hover:bg-white hover:text-black transition-colors duration-300 shadow-md"
              >
                Mes Compétences
              </a>
              <a
                href="#formation"
                className="btn btn-outline border rounded 
                          hover:bg-white hover:text-black transition-colors duration-300 shadow-md"
              >
                Ma formation
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="skills"
        className="min-h-screen flex flex-row items-center justify-center"
      >
        <div className="flex max-w-6xl p-8 flex-col mx-auto items-center space-y-16">
          <h2 className="items-start text-5xl md:text-6xl font-bold">
            Compétences
          </h2>
          <div className="text-center">
            <TechStack />
          </div>
        </div>
      </div>
      <div
        id="formation"
        className="min-h-screen flex flex-row items-center justify-center"
      >
        <div className="items-start justify-center p-8">
          <div className="w-full max-w-6xl flex flex-col items-center space-y-16">
            <h2 className="items-start text-5xl md:text-6xl font-bold">
              Formation
            </h2>
            <EducationTimeline />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
