import { useEffect, useState } from "react";

const App = () => {
  const [languages, setLanguages] = useState([]);
  const [form, setForm] = useState({
    source: "Hello world",
    output: "Привет мир",
    lang: "ru",
  });

  useEffect(() => {
    fetch("https://google-translate1.p.rapidapi.com/language/translate/v2/languages", {
        headers: {
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_API_KEY
          }
    }).then((response) =>response.json()).then((data)=>{
        console.log(data)
        setLanguages(data.data.languages)
    })
  }, []);

  const LanguageOptions = languages.map((item) =>{
      return (
          <option value={item.language} key={item.language}>
              {item.language}
          </option>
      )
  })
  // console.log(import.meta.env.VITE_API_KEY)
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <h1>Translate</h1>

          <div className="form">
            {/* Левая часть */}
            <div className="form__left">
              <textarea name="source">Hello, world!</textarea>
            </div>

            {/* Правая часть */}
            <div className="form__right">
              <select name="lang">
                {LanguageOptions}
              </select>

              <textarea name="output">Привет, мир!</textarea>
            </div>
          </div>

          <button>Translate now</button>
        </div>
      </div>
    </section>
  );
};

export default App;
