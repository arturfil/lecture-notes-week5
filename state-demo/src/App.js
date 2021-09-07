import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import WeatherWidget from "./components/WeatherWidget";
import { useState } from "react";
import Movies from "./components/Movies";

function App() {
  const [theme, setTheme] = useState("light");
  const [unit, setUnit] = useState("C");

  // const changeTheme = () => {
  //   theme == "light" ? setTheme("dark") : setTheme("light");
  // };

  const toggleTheme = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className={` ` + theme}>
      <div className="container  pt-5">
        <h2>App component here change</h2>

        <Movies/>

        {/* <button onClick={() => changeTheme()}>
          set theme to {theme == "light" ? "dark" : "light"}
        </button> */}

        {/* <select onChange={(e) => toggleTheme(e) }>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>

        <br />
        <br />

        <button onClick={() => setUnit('C')}>°C</button>
        <button onClick={() => setUnit('F')}>°F</button>

        <WeatherWidget city="Miami" icon="" unit={unit} celcius="30" />
        <WeatherWidget city="Mexico City" icon="" unit={unit} celcius="23" />
        <WeatherWidget city="Barcelona" icon="" unit={unit} celcius="30" />
        <WeatherWidget city="Berlin" icon="" unit={unit} celcius="18" /> */}
      </div>
    </div>
  );
}

export default App;
