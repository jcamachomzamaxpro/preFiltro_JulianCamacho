import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

import { useHistory } from "react-router-dom";
import axios from "axios";

export const UpdateMaquinas = () => {
  let history = useHistory();

  const [id, setID] = useState(null);
  const [imagen, setImagen] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setNombre(localStorage.getItem("Imagen"));
    setNombre(localStorage.getItem("Nombre"));
    setDescripcion(localStorage.getItem("Descripcion"));
  }, []);

  const updateAPI = () => {
    axios
      .put(`http://localhost:3423/api/musculos/${id}`, {
        imagen,
        nombre,
        descripcion,
      })
      .then(() => {
        history.push("/maquinas");
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Imagen</label>
          <input
            placeholder="Imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Nombre</label>
          <input
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Descripcion</label>
          <input
            placeholder="Descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></input>
        </Form.Field>
        <Button type="submit" onClick={updateAPI}>
          Editar!
        </Button>
      </Form>
    </div>
  );
};
