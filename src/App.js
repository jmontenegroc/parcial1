import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Perfil from "./perfil/perfil";

function App() {
  const [perfil, setPerfil] = useState("");
  const cargar = () => {
    const url =
      "https://raw.githubusercontent.com/jmontenegroc/parcial1/master/src/perfil.json";
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error al cargar el JSON");
      })
      .catch((error) => {
        console.error("Error:", error);
      });}
      cargar().then((datos)=>{
        setPerfil(datos)
      })
      

    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Perfil perfil={perfil} />} />
            <Route path="/parts" element={<Perfil />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
