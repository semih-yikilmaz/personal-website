import data from "../data.json";

import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const content = data[lang].header;

  return (
    <header className="header">

      <div className="header-settings">
        <button onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>

        <button onClick={() => setLang(lang === "tr" ? "en" : "tr")}>
          {lang === "tr" ? "EN" : "TR"}
        </button>
      </div>

      <div className="header-logo">
        S
      </div>

      <nav className="header-nav">
        <a href="#skills">{content.skills}</a>
        <a href="#projects">{content.projects}</a>
        <a href="#contact">{content.hireMe}</a>
      </nav>

    </header>
  );
};

export default Header;