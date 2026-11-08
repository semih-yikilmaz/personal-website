import data from "../data.json";
import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
  const { lang } = useLanguage();

  const content = data[lang].skills;

  return (
    <section className="skills" id="skills">
      <h2>{content.title}</h2>

      <div>
        {content.items.map((skill, index) => (
          <div key={skill.name}>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;