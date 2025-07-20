// src/components/ProjectCard.jsx

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function ProjectCard({ title, description, githubUrl, downloadUrl, images, skills }) {
  return (
    <Card className="rounded-2xl shadow-lg p-4 flex flex-col md:flex-row gap-6">
      {/* Partie gauche */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex gap-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button>Voir sur GitHub</Button>
          </a>
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">Télécharger</Button>
          </a>
        </div>
      </div>

      {/* Partie droite */}
      <div className="md:w-1/2 space-y-4">
        {/* Galerie d’images */}
        <div className="flex overflow-x-auto gap-2">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Screenshot ${index + 1}`}
              className="h-32 rounded-lg border"
            />
          ))}
        </div>
        {/* Compétences */}
        <ul className="flex flex-wrap gap-2 text-sm">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full border text-gray-600"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default ProjectCard;
