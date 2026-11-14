import "./Introduction.css";
import data from "../data.json";
import { useLanguage } from "../context/LanguageContext";

const Introduction = () => {
  const { lang } = useLanguage();

  const content = data[lang].introduction;

  return (
    <section className="introduction mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <div className="introduction-container flex flex-col items-center gap-12 md:flex-row md:justify-between">

        <div className="introduction-content flex w-full flex-col items-start gap-6 md:w-3/5">
          <h1 className="text-4xl font-bold md:text-6xl">
            {content.title}
          </h1>

          <h2 className="text-3xl font-semibold md:text-5xl">
            {content.subtitle}
          </h2>

          <p className="max-w-xl text-base leading-7 md:text-lg">
            {content.description}
          </p>

          <a
            href="#contact"
            className="introduction-button inline-flex items-center justify-center px-8 py-3"
          >
            {content.hireMe}
          </a>
        </div>

        <div className="introduction-image w-full md:w-2/5">
          <img
            src="/images/profile.png"
            alt="Profil görseli"
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Introduction;