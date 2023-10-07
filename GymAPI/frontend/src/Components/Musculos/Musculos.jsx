import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../Assets/css/global.css";
import "../../Assets/css/card.css";

export const Musculos = () => {
  const [datosAPI, setDatosAPI] = useState([]);

  const setDataStorage = (data) => {
    let { _id, nombre, descripcion } = data;
    localStorage.setItem("ID", _id);
    localStorage.setItem("Nombre", nombre);
    localStorage.setItem("Descripcion", descripcion);
  };

  useEffect(() => {
    axios.get("http://localhost:3423/api/musculos").then((response) => {
      setDatosAPI(response.data);
    });
  }, []);

  const getDatos = () => {
    axios.get(`http://localhost:3423/api/musculos`).then((dataObtained) => {
      setDatosAPI(dataObtained.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:3423/api/musculos/${id}`).then(() => {
      getDatos();
    });
  };

  return (
    <div className="global-container">
      <div>
        <h2>Musculos</h2>
        <hr></hr>
        <Link to="/create-musculo">
          <button className="btnCardMusculo">CREAR</button>
        </Link>
      </div>
      <div className="divGenerar">
        {datosAPI.map((datos) => {
          const { nombre, descripcion } = datos;
          return (
            <div className="cardMusculos">
              <h3>{nombre}</h3>
              <p>{descripcion}</p>
              <div className="section-btn-musculos">
                <Link to="/edit-musculo">
                  <button
                    className="btnCardMusculo"
                    onClick={() => setDataStorage(datos)}
                  >
                    EDITAR
                  </button>
                </Link>
                <button
                  className="btnCardMusculo"
                  onClick={() => onDelete(datos._id)}
                >
                  BORRAR
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
