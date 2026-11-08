import data from "../data.json";
import { useLanguage } from "../context/LanguageContext";
import Project from "./Project";

const Projects = () => {
  const { lang } = useLanguage();

  const content = data[lang].projects;

  return (
    <section className="projects" id="projects">
      <h2>{content.title}</h2>

      <div className="projects-list">
        {content.items.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;