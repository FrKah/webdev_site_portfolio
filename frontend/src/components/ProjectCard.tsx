// src/components/ProjectCard.tsx
import React from "react";
import TechnologyCard from "./TechnologyCard";

type ProjectCardProps = {
  title: string;
  description: React.ReactNode;
  githubUrl?: string;
  downloadUrl?: string;
  images?: string[];
  skills?: string[];
  className?: string;
};

// map skill name (lowercased) -> { name, iconClass }
const TECH_MAP: Record<string, { name: string; iconClass: string }> = {
  // Languages
  python: { name: "Python", iconClass: "devicon-python-plain colored" },
  javascript: {
    name: "JavaScript",
    iconClass: "devicon-javascript-plain colored",
  },
  typescript: {
    name: "TypeScript",
    iconClass: "devicon-typescript-plain colored",
  },
  c: { name: "C", iconClass: "devicon-c-plain colored" },
  "c++": { name: "C++", iconClass: "devicon-cplusplus-plain colored" },
  "c#": { name: "C#", iconClass: "devicon-csharp-plain colored" },
  gdscript: { name: "GDScript", iconClass: "devicon-godot-plain colored" },
  sql: { name: "SQL", iconClass: "devicon-mysql-plain colored" },
  bash: { name: "Bash", iconClass: "devicon-bash-plain colored" },

  // Frameworks / libs / tools
  react: { name: "React", iconClass: "devicon-react-original colored" },
  "react native": {
    name: "React Native",
    iconClass: "devicon-react-original colored",
  },
  tailwind: {
    name: "TailwindCSS",
    iconClass: "devicon-tailwindcss-plain colored",
  },
  tailwindcss: {
    name: "TailwindCSS",
    iconClass: "devicon-tailwindcss-plain colored",
  },
  daisyui: { name: "DaisyUI", iconClass: "devicon-tailwindcss-plain colored" }, // reuse Tailwind icon
  express: { name: "Express", iconClass: "devicon-express-original" },
  "node.js": { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
  node: { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
  git: { name: "Git", iconClass: "devicon-git-plain colored" },
  html: { name: "HTML", iconClass: "devicon-html5-plain colored" },
  css: { name: "CSS", iconClass: "devicon-css3-plain colored" },

  // Misc from your list
  "sql oracle": {
    name: "SQL Oracle",
    iconClass: "devicon-oracle-original colored",
  },
  "expressions régulières": { name: "Regex", iconClass: "devicon-regex-plain" }, // fallback (no official)
  yolov5: { name: "YOLOv5", iconClass: "devicon-pytorch-original colored" },
  "blender api (pour générer un dataset synthétique": {
    name: "Blender",
    iconClass: "devicon-blender-original colored",
  },
};

const normalize = (s: string) => s.trim().toLowerCase();

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
      className={`rounded-2xl border border-base-300 bg-base-200 shadow-lg p-6 flex flex-col gap-6 ${className}`}
    >
      {/* Header / description */}
      <div>
        <h2 className="text-3xl font-semibold">{title}</h2>
        <div className="text-base mt-3 prose prose-neutral max-w-none">
          {description}
        </div>

        {/* Buttons pinned below title+desc on wide cards: keep here, layout above centers the card */}
        <div className="mt-6 flex gap-4">
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

      {/* Images */}
      {images.length > 0 && (
        <div className="flex overflow-x-auto gap-3">
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

      {/* Technologies (TechnologyCard grid) */}
      {skills.length > 0 && (
        <div>
          <div className="flex flex-wrap gap-4">
            {skills.map((raw, i) => {
              const key = normalize(raw);
              const tech = TECH_MAP[key];
              return (
                <TechnologyCard
                  key={`${key}-${i}`}
                  name={tech.name}
                  iconClass={tech.iconClass}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
