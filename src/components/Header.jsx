import "./Header.css"
import data from "../data.json";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const content = data[lang].header;

  return (
    <header className="header mx-auto w-full max-w-6xl px-6">

      <div className="header-settings flex items-center justify-end gap-4 py-4">
        <button
          className="theme-toggle flex items-center gap-2"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          aria-pressed={theme === "dark"}
        >
          <span className="theme-switch flex h-4 w-9 items-center rounded-full px-1">
            <span className="theme-switch-circle h-3 w-3 rounded-full" />
          </span>

          <span>{theme === "light" ? "DARK MODE" : "LIGHT MODE"}</span>
        </button>

        <button onClick={() => setLang(lang === "tr" ? "en" : "tr")}>
          {lang === "tr" ? "EN" : "TR"}
        </button>
      </div>

      <div className="header-main flex items-center justify-between py-6">

        <div className="header-logo flex items-center justify-center">
          S
        </div>

        <nav className="header-nav flex flex-wrap items-center gap-4 sm:gap-8">
          <a href="#skills">{content.skills}</a>
          <a href="#projects">{content.projects}</a>
          <a href="#contact">{content.hireMe}</a>
        </nav>

      </div>

    </header>
  );
};

export default Header;