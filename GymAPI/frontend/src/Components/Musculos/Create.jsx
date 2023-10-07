import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const CreateMusculos = () => {
  let history = useHistory();

  const [id, setID] = useState(null);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const postDatos = () => {
    axios
      .post(`http://localhost:3423/api/musculos`, {
        nombre,
        descripcion,
      })
      .then(() => {
        history.push("/musculos");
      });
  };

  return (
    <div>
      <Form className="create-form">
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
        <Button type="submit" onClick={postDatos}>
          Enviar
        </Button>
      </Form>
    </div>
  );
};
