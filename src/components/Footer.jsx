import "./Footer.css";
import data from "../data.json";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { lang } = useLanguage();

  const content = data[lang].footer;

  return (
    <footer
      className="footer w-full py-10 md:py-14"
      id="contact"
    >
      <div className="footer-content mx-auto flex w-full max-w-3xl flex-col items-start gap-6 px-6">

        <h2 className="max-w-xl text-2xl font-bold md:text-3xl">
          {content.title}
        </h2>

        <p className="max-w-l text-base leading-7 md:text-lg">
          {content.description}
        </p>

        <a
          href={`mailto:${content.email}`}
          className="footer-email text-lg font-semibold md:text-l"
        >
          {content.email}
        </a>

      </div>
    </footer>
  );
};

export default Footer;