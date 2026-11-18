import "./Skills.css";
import data from "../data.json";
import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
  const { lang } = useLanguage();

  const content = data[lang].skills;

  return (
    <section
      className="skills mx-auto w-full max-w-3xl px-6 py-10 md:py-14"
      id="skills"
    >
      <h2 className="mb-10 text-2xl font-bold md:text-3xl">
        {content.title}
      </h2>

      <div className="skills-list grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((skill) => (
          <div
            className="skill-item flex flex-col gap-4"
            key={skill.name}
          >
            <h3 className="text-2xl font-semibold">
              {skill.name}
            </h3>

            <p className="text-base leading-7">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;