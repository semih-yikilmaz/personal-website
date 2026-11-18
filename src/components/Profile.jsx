import "./Profile.css";
import data from "../data.json";
import { useLanguage } from "../context/LanguageContext";

const Profile = () => {
  const { lang } = useLanguage();

  const content = data[lang].profile;

  return (
    <section className="profile mx-auto w-full max-w-3xl px-6 py-10 md:py-14">
      <h2 className="mb-10 text-2xl font-bold md:text-3xl">
        {content.title}
      </h2>

      <div className="profile-content grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="profile-info flex flex-col gap-4">
          <h3 className="mb-4 text-2xl font-semibold">
            {content.basicInformation}
          </h3>

          <p className="grid grid-cols-[110px_1fr] gap-4 sm:grid-cols-[140px_1fr]">
            <span>{content.birthDate}</span>
            <span>1989</span>
          </p>

          <p className="grid grid-cols-[110px_1fr] gap-4 sm:grid-cols-[140px_1fr]">
            <span>{content.city}</span>
            <span>Eskişehir</span>
          </p>

          <p className="grid grid-cols-[110px_1fr] gap-4 sm:grid-cols-[140px_1fr]">
            <span>{content.education}</span>
            <span>Selçuk Üniversitesi - Hukuk (Law)</span>
          </p>

          <p className="grid grid-cols-[110px_1fr] gap-4 sm:grid-cols-[140px_1fr]">
            <span>{content.role}</span>
            <span>FrontEnd Developer</span>
          </p>
        </div>

        <div className="profile-about flex flex-col gap-6">
          <h3 className="text-2xl font-semibold">
            {content.aboutTitle}
          </h3>

          <p className="text-base leading-8">
            {content.about}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;