const Project = ({ project }) => {
  return (
    <article className="project">
      <img src={project.image} alt={project.name} />

      <h3>{project.name}</h3>
      <p>{project.description}</p>

      <div className="project-technologies">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.github}>GitHub</a>
        <a href={project.website}>View Site</a>
      </div>
    </article>
  );
};

export default Project;