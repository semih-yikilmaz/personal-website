import data from "../data.json";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { lang } = useLanguage();

  const content = data[lang].footer;

  return (
    <footer className="footer" id="contact">
      <h2>{content.title}</h2>
      <p>{content.description}</p>

      <a href={`mailto:${content.email}`}>
        {content.email}
      </a>
    </footer>
  );
};

export default Footer;