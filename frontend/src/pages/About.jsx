function About() {
  return (
    <div className="bg-black text-white h-full flex flex-row items-center justify-center">
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">À propos de moi</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Développement de jeux vidéo</h2>
          <p>
            Je développe des jeux vidéo en indépendant pendant mon temps libre. 
            C’est un terrain de jeu parfait pour explorer des idées créatives, 
            expérimenter avec des mécaniques originales et raconter des histoires interactives.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Musique</h2>
          <p>
            Je suis guitariste et compositeur. La musique est pour moi un moyen d’expression 
            complémentaire au développement. Je compose souvent en lien avec mes projets de jeux.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Jeu de rôle (MJ)</h2>
          <p>
            Je suis maître du jeu pour des parties de jeu de rôle depuis plusieurs années. 
            Que ce soit en improvisation ou avec des scénarios écrits, 
            j’adore construire des univers, faire vivre des histoires et incarner des personnages hauts en couleur.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
