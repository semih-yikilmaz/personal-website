import "./Projects.css";
import data from "../data.json";
import { useLanguage } from "../context/LanguageContext";
import Project from "./Project";

const Projects = () => {
  const { lang } = useLanguage();

  const content = data[lang].projects;

  return (
    <section
      className="projects mx-auto w-full max-w-6xl px-6 py-16 md:py-20"
      id="projects"
    >
      <h2 className="mb-10 text-3xl font-bold md:text-5xl">
        {content.title}
      </h2>

      <div className="projects-list grid grid-cols-1 gap-10 md:grid-cols-2">
        {content.items.map((project) => (
          <Project
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;