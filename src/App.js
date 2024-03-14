import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Perfil from './perfil/perfil';


function App() {
  const cargarPerfil=()=>{
    fetch('perfil.json')
        .then(res=>res.json)
        .then(datos=>{
            console.log(datos);
        })
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Perfil onAppear={cargarPerfil}/>} />
          <Route path="/parts" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
