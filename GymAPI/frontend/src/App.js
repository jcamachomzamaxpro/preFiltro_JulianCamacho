import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Musculos } from "./Components/Musculos/Musculos";
import { Maquinas } from "./Components/Maquinas/Maquinas";
import { Ejercicios } from "./Components/Ejercicios/Ejercicios";
import { Rutinas } from "./Components/Rutinas/Rutinas";
import { Suplementos } from "./Components/Suplementos/Suplementos";
import { UpdateMusculos } from "./Components/Musculos/Update";
import { CreateMusculos } from "./Components/Musculos/Create";
import { CreateMaquinas } from "./Components/Maquinas/Create";

function App() {
  const [collection, setCollection] = useState("");

  return (
    <Router>
      <div className="containerHeader">
        <div className="header">
          <div className="divHeader">
            <div className="logo1">
              Gym<span>API</span>
            </div>
            <div className="btnHeaders">
              <Link to="/">
                <button className="btn">Inicio</button>
              </Link>
              <a
                href="https://www.figma.com/file/QUAQQMcELtk2tsqqI2rVxV/Untitled?type=design&node-id=22%3A2099&mode=design&t=WJVUnuhV6SH4GkTO-1"
                target="_blank"
              >
                <button className="btn">Figma</button>
              </a>
              <a href="http://localhost:3423/api-doc/" target="_blank">
                <button
                  className="btn"
                  style={{
                    color: "#006eff",
                    border: "3px ridge #2F80ED",
                    boxShadow: "red",
                  }}
                >
                  API Documentation
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="subContainerHeader">
          <div className="subHeader">
            <Link to="/musculos">
              <button className="btn2">Musculos</button>
            </Link>
            <Link to="/equipamientos">
              <button className="btn2">Equipamientos</button>
            </Link>
            <Link to="/ejercicios">
              <button className="btn2">Ejercicios</button>
            </Link>
            <Link to="/rutinas">
              <button className="btn2">Rutinas</button>
            </Link>
            <Link to="/suplementos">
              <button className="btn2">Suplementos</button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="bodyContainer">
          <Route exact path="/">
            Home (Esperando a que se renderize algo de otra seccion 💥👏 ...)
          </Route>
          <Route exact path="/musculos" component={Musculos}></Route>
          <Route exact path="/equipamientos" component={Maquinas}></Route>
          <Route exact path="/ejercicios" component={Ejercicios}></Route>
          <Route exact path="/rutinas" component={Rutinas}></Route>
          <Route exact path="/suplementos" component={Suplementos}></Route>
          <Route exact path="/edit-musculo" component={UpdateMusculos}></Route>
          <Route
            exact
            path="/create-musculo"
            component={CreateMusculos}
          ></Route>
          <Route
            exact
            path="/create-maquinas"
            component={CreateMaquinas}
          ></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
