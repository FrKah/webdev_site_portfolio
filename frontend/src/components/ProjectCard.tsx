// src/components/ProjectCard.tsx
import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  githubUrl?: string;
  downloadUrl?: string;
  images?: string[]; // image URLs (e.g., imported assets or paths)
  skills?: string[]; // badges
  className?: string; // optional extra classes
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubUrl,
  downloadUrl,
  images = [],
  skills = [],
  className = "",
}) => {
  return (
    <div
      className={`rounded-2xl border border-base-300 bg-base-200 shadow-lg p-4 flex flex-col gap-6 ${className}`}
    >
      {/* Left */}
      <div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="mt-auto flex gap-4 pt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Voir sur GitHub
            </a>
          )}
          {downloadUrl && (
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Télécharger
            </a>
          )}
        </div>
      </div>

      {/* Right */}
      <div className="space-y-4">
        {/* Images */}
        {images.length > 0 && (
          <div className="flex overflow-x-auto gap-2">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Screenshot ${index + 1} for ${title}`}
                className="h-32 rounded-lg border"
              />
            ))}
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-auto text-sm">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="bg-gray-100 px-3 py-1 rounded-full border text-gray-600"
              >
                {skill}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
