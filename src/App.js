import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Weather />
      <footer>
        This app was created by Laura 🙋🏻‍♀️ and is{" "}
        <a
          href="https://github.com/WestLaura/weather-react-app"
          target="_blank"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
