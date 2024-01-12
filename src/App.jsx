import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import logo from "./assets/logo.svg";
import Informacion from "./components/Estructura/Informacion/Informacion";
import Infoprecios from "./components/InfoPrecios/Infoprecios";

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="logoPage" />
      </header>

      <div className="general-wrapper">
        <Informacion />
        <Infoprecios />
      </div>
    </>
  );
}

export default App;
