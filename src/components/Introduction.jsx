import "./Introduction.css";
import data from "../data.json";
import { useLanguage } from "../context/LanguageContext";

const Introduction = () => {
  const { lang } = useLanguage();

  const content = data[lang].introduction;

  return (
    <section className="introduction mx-auto w-full max-w-3xl px-6 py-10 md:py-14">
      <div className="introduction-container flex flex-col items-center gap-12 md:flex-row md:justify-between">

        <div className="introduction-content flex w-full flex-col items-start gap-6 md:w-3/5">
          <h1 className="text-3xl font-bold md:text-4xl">
            {content.title}
          </h1>

          <h2 className="text-2xl font-semibold md:text-3xl">
            {content.subtitle}
          </h2>

          <p className="max-w-xl text-base leading-7 md:text-lg">
            {content.description}
          </p>

          <div className="introduction-links flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="introduction-button inline-flex items-center justify-center px-8 py-3"
            >
              {content.hireMe}
            </a>

            <a
              href="https://github.com/semih-yikilmaz"
              target="_blank"
              rel="noopener noreferrer"
              className="introduction-social inline-flex items-center justify-center px-5 py-3"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/semih-y%C4%B1k%C4%B1lmaz-593220450/"
              target="_blank"
              rel="noopener noreferrer"
              className="introduction-social inline-flex items-center justify-center px-5 py-3"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="introduction-image w-full md:w-2/5">
          <img
            src="/images/profile.png"
            alt="Profil görseli"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Introduction;