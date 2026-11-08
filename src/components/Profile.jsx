import data from "../data.json";
import { useLanguage } from "../context/LanguageContext";

const Profile = () => {
  const { lang } = useLanguage();

  const content = data[lang].profile;

  return (
    <section className="profile">
      <h2>{content.title}</h2>

      <div className="profile-content">
        <div className="profile-info">
          <h3>{content.basicInformation}</h3>

          <p>
            <span>{content.birthDate}</span>
            <span>1989</span>
          </p>

          <p>
            <span>{content.city}</span>
            <span>Eskişehir</span>
          </p>

          <p>
            <span>{content.education}</span>
            <span>Selçuk Üni. - Hukuk (Law)</span>
          </p>

          <p>
            <span>{content.role}</span>
            <span>FrontEnd Developer</span>
          </p>
        </div>

        <div className="profile-about">
          <h3>{content.aboutTitle}</h3>
          <p>{content.about}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;