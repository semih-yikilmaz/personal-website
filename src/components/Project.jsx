import "./Project.css";

const Project = ({ project }) => {
  return (
    <article className="project flex h-full flex-col gap-5">
      <div className="project-image w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="aspect-video w-full object-cover"
        />
      </div>

      <h3 className="text-2xl font-semibold">
        {project.name}
      </h3>

      <p className="text-base leading-7">
        {project.description}
      </p>

      <div className="project-technologies flex flex-wrap gap-3">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="px-4 py-2 text-sm"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="project-links mt-auto flex flex-wrap gap-6 pt-4">
        <a href={project.github}>GitHub</a>
        <a href={project.website}>View Site</a>
      </div>
    </article>
  );
};

export default Project;