import ProjectCard from "../components/ProjectCard";
import rasbello1 from "../assets/project_pictures/rasbello/rasbello1.png";
import rasbello2 from "../assets/project_pictures/rasbello/rasbello2.png";
import rasbello3 from "../assets/project_pictures/rasbello/rasbello3.png";
import gauntlet1 from "../assets/project_pictures/gauntlet/gauntlet1.png";
import gauntlet2 from "../assets/project_pictures/gauntlet/gauntlet2.png";
import gauntlet3 from "../assets/project_pictures/gauntlet/gauntlet3.png";

function Projects() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl text-center font-bold">Mes projets</h1>

      <ProjectCard
        title="Site de l'association de volley inter-entreprises de Sophia Antipolis (A.S.I.E volley)"
        description={
          <>
            <p>
              Dans le cadre d’un projet de refonte, j’ai modernisé le site
              officiel de l’Association Sportive Inter-Entreprises de Sophia
              Antipolis (A.S.I.E.), dédié à l’organisation de leur compétition
              annuelle de volley-ball.
            </p>
            <p>
              Le site original, développé en PHP avec une structure
              désorganisée, nécessitait une refonte complète tant sur le plan
              visuel que fonctionnel. J’ai choisi une stack moderne et légère :
            </p>
            <ul className="list-disc list-inside ml-4 mb-2">
              <li>
                <b>Frontend :</b> TypeScript + TailwindCSS, avec DaisyUI pour
                des composants élégants et cohérents.
              </li>
              <li>
                <b>Backend :</b> Node.js + Express, utilisé uniquement pour
                transmettre les requêtes vers une base MySQL existante
                (résultats, classements, organisation des matches).
              </li>
            </ul>
            <p className="mt-2 mb-1 font-semibold">Objectifs atteints :</p>
            <ul className="list-disc list-inside ml-4 mb-2">
              <li>
                Un design <b>responsive</b>, adapté aussi bien au mobile qu’au
                bureau.
              </li>
              <li>
                Une navigation claire avec une réorganisation judicieuse des
                contenus.
              </li>
              <li>
                La conservation des fonctionnalités essentielles, tout en
                supprimant les doublons ou parties obsolètes.
              </li>
              <li>
                Un déploiement efficace via des services gratuits (<b>Vercel</b>{" "}
                pour le frontend, <b>Render</b> pour le backend, <b>Aiven</b>{" "}
                pour la base de données MySQL).
              </li>
            </ul>
            <p>
              <b>Compétences développées :</b> refonte d’interface, gestion de
              base de données, déploiement multi-plateforme, collaboration avec
              une structure associative aux besoins spécifiques.
            </p>
          </>
        }
        githubUrl="https://github.com/FrKah/SiteVolleyASIE"
        websiteLink="https://site-volley-asie.vercel.app/"
        skills={[
          "Javascript",
          "Typescript",
          "React",
          "Tailwind",
          "DaisyUI",
          "Node.js",
          "Express",
          "SQL",
          "Git",
        ]}
      />

      <ProjectCard
        title="Mon portfolio"
        description={
          <>
            <p>
              Mon site portfolio est un projet vitrine me permettant de
              présenter mes réalisations techniques de manière élégante et
              accessible.
              <br />
              Il a été conçu avec une attention particulière à la lisibilité, à
              la cohérence graphique et à la navigation fluide, aussi bien sur
              ordinateur que sur mobile.
            </p>
            <ul className="list-disc list-inside ml-4 mb-2">
              <li>
                Renforcement des bases en <b>développement frontend moderne</b>
              </li>
              <li>
                Perfectionnement de l’usage de <b>TailwindCSS</b>
              </li>
              <li>
                Application de bonnes pratiques de <b>conception responsive</b>
              </li>
              <li>
                Évolution régulière du site en parallèle des autres projets
              </li>
            </ul>
          </>
        }
        githubUrl="https://github.com/FrKah/SiteVolleyASIE"
        websiteLink="https://frkah.github.io/webdev_site_portfolio"
        skills={[
          "Javascript",
          "Typescript",
          "React",
          "Tailwind",
          "DaisyUI",
          "Git",
        ]}
      />

      <ProjectCard
        title="SQL Rewriter"
        description={
          <>
            <p>
              <b>SQL Rewriter</b> est un outil de réécriture automatique de
              requêtes SQL, développé en Python lors de mon stage chez Worldline
              (équipe LIQUIDITY).
              <br />
              Son objectif principal : assurer la compatibilité entre{" "}
              <b>Oracle</b> et <b>PostgreSQL</b> en transformant les requêtes
              spécifiques Oracle (NVL, (+), DELETE sans FROM, etc.) en requêtes
              SQL standards.
            </p>
            <p>
              L’outil analyse et modifie automatiquement les fichiers sources
              (.c, .pc pour Pro*C, .sh, .sql), puis sauvegarde une version
              transformée dans un répertoire dédié.
              <br />
              Pour faciliter la relecture et le contrôle qualité, un rapport
              HTML interactif est généré :
            </p>
            <ul className="list-disc list-inside ml-4 mb-2">
              <li>
                Navigation par fichier et par statut de réécriture (réussie ou
                abandonnée)
              </li>
              <li>
                Présentation côte à côte des requêtes originales et modifiées,
                avec diff visuel
              </li>
              <li>
                Affichage des transformations, de la ligne d’origine, et des
                messages d’erreur en cas d’échec
              </li>
              <li>
                Barre de recherche pour filtrer rapidement les requêtes du
                rapport
              </li>
            </ul>
            <p>
              <b>Compétences développées :</b> parsing, manipulation de texte
              complexe, génération de rapports web, gestion de projets de
              transformation de code à grande échelle dans un contexte
              industriel.
            </p>
            <p>
              SQL rewriter a été développé dans le cadre de mon stage chez
              Worldline. Le code appartient à l’entreprise et ne peut donc pas
              être partagé.
            </p>
          </>
        }
        skills={["Python", "SQL Oracle", "HTML", "CSS", "JavaScript"]}
      />

      <ProjectCard
        title="Rasbello"
        description={
          <>
            <p>
              <b>Rasbello</b> est une version moderne et accessible du jeu
              Othello, conçue pour tourner de manière fluide sur Raspberry Pi.
              <br />
              Développé principalement en Python avec PyQt, le jeu exploite le
              multithreading pour gérer de manière réactive ses différents
              modules (interface, voix, IA, réseau).
            </p>
            <ul className="list-disc list-inside ml-4 mb-2">
              <li>
                <b>Contrôles multiples :</b> souris ou commandes vocales,
                support trilingue (français, italien, anglais)
              </li>
              <li>
                <b>Intelligence artificielle puissante :</b> version adaptée de
                Egaroucid (meilleure IA open-source Othello), moteur C++
                optimisé pour Raspberry Pi, interface Python/C++
              </li>
              <li>
                <b>Multijoueur en ligne :</b> affrontez d'autres joueurs humains
                ou laissez l’IA jouer pour vous (mode online innovant)
              </li>
              <li>
                <b>Direction artistique soignée :</b> esthétique pixel art faite
                main, plusieurs résolutions, options de personnalisation
                (plateau, pions, etc.)
              </li>
              <li>
                <b>Accessibilité & modding :</b> version exécutable pour
                installation facile, guide de modding pour ajouter/modifier des
                fonctionnalités ou le contenu visuel
              </li>
            </ul>
          </>
        }
        githubUrl="https://github.com/FrKah/Rasbello"
        images={[rasbello1, rasbello2, rasbello3]}
        skills={["Python", "C++", "Git"]}
      />

      <ProjectCard
        title="Gauntlet of Sight"
        description={
          <>
            <p>
              <b>Gauntlet of Sight</b> est un dispositif d’assistance portable
              destiné aux personnes malvoyantes.
              <br />
              Conçu sous la forme d’un gant intelligent, il intègre une caméra
              embarquée dans la paume, un microcontrôleur avec retour haptique
              (moteur à vibration de précision), ainsi qu’un système audio
              spatial via casque.
              <br />
              <b>Objectif :</b> indiquer la position des obstacles dans
              l’environnement proche, de manière intuitive et non intrusive.
            </p>
            <p className="mt-2 mb-1 font-semibold">
              Détection des obstacles : Version fine-tunée de <b>YOLOv5</b>,
              entraînée sur un dataset hybride
            </p>

            <ul className="list-disc list-inside ml-8">
              <li>5% de photos réelles d’obstacles à reconnaître</li>
              <li>
                95% d’images de synthèse générées avec Blender API Python
                (modèle 3D sous différents angles, éclairages, contextes
                visuels)
              </li>
            </ul>
            <p>
              Le modèle optimisé tourne localement sur un <b>Raspberry Pi</b>,
              garantissant une exécution légère et autonome, sans besoin de
              connexion à un serveur distant.
            </p>
            <p>
              Le gant intègre tous les composants matériels : caméra, moteur
              haptique, carte Raspberry Pi, alimentation.
              <br />
              Grâce à cette intégration compacte, GOS offre une solution
              discrète, mobile et économique pour une meilleure autonomie des
              personnes atteintes de déficience visuelle.
            </p>
          </>
        }
        images={[gauntlet1, gauntlet2, gauntlet3]}
        skills={[
          "Python",
          "Blender API (pour générer un dataset synthétique",
          "YoloV5",
        ]}
      />
    </div>
  );
}

export default Projects;
