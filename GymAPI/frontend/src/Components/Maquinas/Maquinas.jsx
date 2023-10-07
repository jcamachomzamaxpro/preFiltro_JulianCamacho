import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../Assets/css/global.css";
import "../../Assets/css/card2.css";

export const Maquinas = () => {
  const [datosAPI, setDatosAPI] = useState([]);

  const setDataStorage = (data) => {
    let { _id, imagen, nombre, descripcion } = data;
    localStorage.setItem("ID", _id);
    localStorage.setItem("Imagen", imagen);
    localStorage.setItem("Nombre", nombre);
    localStorage.setItem("Descripcion", descripcion);
  };

  useEffect(() => {
    axios.get("http://localhost:3423/api/maquinas").then((response) => {
      setDatosAPI(response.data);
    });
  }, []);

  const getDatos = () => {
    axios.get(`http://localhost:3423/api/maquinas`).then((dataObtained) => {
      setDatosAPI(dataObtained.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:3423/api/maquinas/${id}`).then(() => {
      getDatos();
    });
  };

  return (
    <div className="global-container">
      <div>
        <h2>Maquinas</h2>
        <hr></hr>
        <Link to="/create-maquinas">
          <button className="btnCardMusculo">CREAR</button>
        </Link>
      </div>
      <div className="renderDatos">
        {datosAPI.map((datos) => {
          const { imagen, nombre, descripcion } = datos;
          return (
            <div class="card">
              <img src={imagen} alt="" className="cardImg" />
              <div class="card__content">
                <p class="card__title">
                  <div className="section-btn-musculos">
                    <button
                      className="btnCardMusculo"
                      onClick={() => setDataStorage(datos)}
                    >
                      EDITAR
                    </button>
                    <button
                      className="btnCardMusculo"
                      onClick={() => onDelete(datos._id)}
                    >
                      BORRAR
                    </button>
                  </div>
                </p>
                <p class="card__title">{nombre}</p>
                <p class="card__description">{descripcion}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
