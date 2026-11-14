import "./Footer.css";
import data from "../data.json";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { lang } = useLanguage();

  const content = data[lang].footer;

  return (
    <footer
      className="footer w-full py-16 md:py-24"
      id="contact"
    >
      <div className="footer-content mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6">

        <h2 className="max-w-2xl text-3xl font-bold md:text-5xl">
          {content.title}
        </h2>

        <p className="max-w-xl text-base leading-7 md:text-lg">
          {content.description}
        </p>

        <a
          href={`mailto:${content.email}`}
          className="footer-email text-lg font-semibold md:text-xl"
        >
          {content.email}
        </a>

      </div>
    </footer>
  );
};

export default Footer;