import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../Assets/css/global.css";

export const Ejercicios = () => {
  const [datosAPI, setDatosAPI] = useState([]);

  const setDataStorage = (data) => {
    let { _id, nombre, descripcion } = data;
    localStorage.setItem("ID", _id);
    localStorage.setItem("Nombre", nombre);
    localStorage.setItem("Descripcion", descripcion);
  };

  useEffect(() => {
    axios.get("http://localhost:3423/api/ejercicios").then((response) => {
      setDatosAPI(response.data);
    });
  }, []);

  const getDatos = () => {
    axios.get(`http://localhost:3423/api/ejercicios`).then((dataObtained) => {
      setDatosAPI(dataObtained.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:3423/api/ejercicios/${id}`).then(() => {
      getDatos();
    });
  };

  return (
    <div className="global-container">
      <div>
        <h2>Ejercicios</h2>
        <hr></hr>
        <Link to="/create-ejercicios">
          <button className="btnCardMusculo">CREAR</button>
        </Link>
      </div>

      <div className="divGenerar">
        {datosAPI.map((datos) => {
          const { nombre, pasos, nivel } = datos;
          return (
            <div class="cardMusculos">
              <h3>{nombre}</h3>
              <p>
                {pasos.map((e) => {
                  return <li>{e}</li>;
                })}
              </p>
              <div class="section-btn-musculos">
                <div class="nivel-ejercicio">
                  <span>{nivel}</span>
                  <p>nivel</p>
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
