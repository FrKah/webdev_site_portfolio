import ProjectCard from "../components/ProjectCard";
import rasbello1 from "../assets/project_pictures/rasbello/rasbello1.png";
import rasbello2 from "../assets/project_pictures/rasbello/rasbello2.png";
import rasbello3 from "../assets/project_pictures/rasbello/rasbello3.png";
import gauntlet1 from "../assets/project_pictures/gauntlet/gauntlet1.png";
import gauntlet2 from "../assets/project_pictures/gauntlet/gauntlet2.png";
import gauntlet3 from "../assets/project_pictures/gauntlet/gauntlet3.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl text-center font-bold">{t("projects.title")}</h1>

      <ProjectCard
        title={t("projects.volley.title")}
        description={
          <span
            dangerouslySetInnerHTML={{
              __html: t("projects.volley.description"),
            }}
          />
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
        title={t("projects.portfolio.title")}
        description={
          <span
            dangerouslySetInnerHTML={{
              __html: t("projects.portfolio.description"),
            }}
          />
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
        title={t("projects.sqlrewriter.title")}
        description={
          <span
            dangerouslySetInnerHTML={{
              __html: t("projects.sqlrewriter.description"),
            }}
          />
        }
        skills={["Python", "SQL Oracle", "HTML", "CSS", "JavaScript"]}
      />

      <ProjectCard
        title={t("projects.rasbello.title")}
        description={
          <span
            dangerouslySetInnerHTML={{
              __html: t("projects.rasbello.description"),
            }}
          />
        }
        githubUrl="https://github.com/FrKah/Rasbello"
        images={[rasbello1, rasbello2, rasbello3]}
        skills={["Python", "C++", "Git"]}
      />

      <ProjectCard
        title={t("projects.gauntlet.title")}
        description={
          <span
            dangerouslySetInnerHTML={{
              __html: t("projects.gauntlet.description"),
            }}
          />
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
