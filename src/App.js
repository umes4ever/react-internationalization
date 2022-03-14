import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <p>{t("title")}</p>
        </div>
        <div>
          <label htmlFor="languages">{t("select-label")}: </label>
          <select
            name="languages"
            id="languages"
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="np">Nepali</option>
            <option value="jp">Japanese</option>
          </select>
        </div>
        <div>
          <p>{t("description.sample-text")}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
