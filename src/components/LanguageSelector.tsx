import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { useLanguages } from "../hooks/useLanguages";
import { LanguageType } from "../types";

// Inspired by https://blog.logrocket.com/creating-custom-select-dropdown-css/

const LanguageSelector = () => {
  const { language, setLanguage } = useAppContext();
  const { fetchedLanguages, loading, error } = useLanguages();

  const setLang = (lang:LanguageType|undefined = undefined)=>{
    const l = lang || fetchedLanguages[0];
    setLanguage(l);
    localStorage.setItem("lang", l.lang.toLowerCase());
  }

  useEffect(()=>{
    if(!loading && !error){
      const lastLang = localStorage.getItem("lang");
      const x = fetchedLanguages.find(x=>x.lang.toLowerCase() === lastLang);
      if(!x){
        setLang(x);
      }else{
        setLang();
      }
    }
  },[fetchedLanguages, loading, error]);


  if (loading) return <p>Loading languages...</p>;
  if (error) return <p>Error fetching languages: {error}</p>;

  return (
    <ul role="list" className="categories">
      {fetchedLanguages.map((lang, idx) => (
        <li key={idx} className="category">
          <button
            className={`category__btn ${
              lang === language ? "category__btn--active" : ""
            }`}
            onClick={() => setLanguage(lang)}
          >
             { <label className="icon-text">
                <img className="lang__icon" src={lang.icon} alt="" />
                <span>{lang.lang}</span>
              </label>}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSelector;
