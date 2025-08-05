import TechnologyCard from "./TechnologyCard";

const languages = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "C", icon: "devicon-c-plain colored" },
  { name: "C++", icon: "devicon-cplusplus-plain colored" },
  { name: "C#", icon: "devicon-csharp-plain colored" },
  { name: "GDScript", icon: "devicon-godot-plain colored" }, // Godot icon as proxy
];

const technologies = [
  { name: "React", icon: "devicon-react-original colored" },
  { name: "React Native", icon: "devicon-react-original colored" }, // reuse React icon
  { name: "TailwindCSS", icon: "devicon-tailwindcss-plain colored" },
  { name: "SQL", icon: "devicon-mysql-plain colored" }, // generic SQL
  { name: "Express", icon: "devicon-express-original" }, // often monochrome
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
];

const TechStack = () => {
  return (
    <section className="space-y-10">
      {/* Languages */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">Languages</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 justify-items-center">
          {languages.map((t) => (
            <TechnologyCard key={t.name} name={t.name} iconClass={t.icon} />
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">Technologies & Outils</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 justify-items-center">
          {technologies.map((t) => (
            <TechnologyCard key={t.name} name={t.name} iconClass={t.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechStack;
