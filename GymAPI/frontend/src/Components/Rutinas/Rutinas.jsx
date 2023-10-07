import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../Assets/css/global.css";

export const Rutinas = () => {
  const [datosAPI, setDatosAPI] = useState([]);

  const setDataStorage = (data) => {
    let { _id, nombre, descripcion } = data;
    localStorage.setItem("ID", _id);
    localStorage.setItem("Nombre", nombre);
    localStorage.setItem("Descripcion", descripcion);
  };

  useEffect(() => {
    axios.get("http://localhost:3423/api/rutinas").then((response) => {
      setDatosAPI(response.data);
    });
  }, []);

  const getDatos = () => {
    axios.get(`http://localhost:3423/api/rutinas`).then((dataObtained) => {
      setDatosAPI(dataObtained.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:3423/api/rutinas/${id}`).then(() => {
      getDatos();
    });
  };

  return (
    <div className="global-container">
      <div>
        <h2>Rutinas</h2>
        <hr></hr>
        <Link to="/create-rutinas">
          <button className="btnCardMusculo">CREAR</button>
        </Link>
      </div>

      <div className="divGenerar">
        {datosAPI.map((datos) => {
          const { nombre, ejercicios } = datos;
          return (
            <div class="cardMusculos">
              <h3>{nombre} </h3>
              <p>
                {ejercicios.map((e) => {
                  return <li>{e.nombre}</li>;
                })}
              </p>
              <div class="section-btn-musculos">
                <div class="nivel-ejercicio">
                  <span>{nombre}</span>
                  <p>rutina</p>
                </div>

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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
