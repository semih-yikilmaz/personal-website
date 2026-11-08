import data from "../data.json";
import { useLanguage } from "../context/LanguageContext";

const Introduction = () => {
  const { lang } = useLanguage();

  const content = data[lang].introduction;

  return (
    <section className="introduction">
      <h1>{content.title}</h1>
      <h2>{content.subtitle}</h2>
      <p>{content.description}</p>
      <a href="#contact">{content.hireMe}</a>
    </section>
  );
};

export default Introduction;