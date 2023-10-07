import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const CreateMaquinas = () => {
  let history = useHistory();

  const [id, setID] = useState(null);
  const [imagen, setImagen] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const postDatos = () => {
    axios
      .post(`http://localhost:3423/api/maquinas`, {
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
          <label>imagen</label>
          <input
            placeholder="imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>nombre</label>
          <input
            placeholder="nombre"
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
        <Button type="submit" onClick={postDatos}>
          Enviar
        </Button>
      </Form>
    </div>
  );
};
