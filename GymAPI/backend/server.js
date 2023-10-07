const express = require("express");
const cors = require("cors");
// swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerSpec = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "GymAPI",
      description: "Documentacion de GymAPI",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3423/api",
      },
    ],
  },
  apis: ["./routes/*.js"], // path to the API handle folder
};

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT256;

    // this.paths = '/cosas';

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/api", require("./routes/routes"));
    this.app.use(
      "/api-doc",
      swaggerUI.serve,
      swaggerUI.setup(swaggerJSDoc(swaggerSpec))
    );
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Corriendose en puerto ${this.port}`);
    });
  }
}

module.exports = Server;
