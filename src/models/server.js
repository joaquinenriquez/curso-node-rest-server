const express = require("express");
const cors = require("cors");

module.exports = class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosRoutes = '/api/users';

    // Middleware
    this.middlewares();

    // Rutas de la aplicacion
    this.routes();
  }

  routes() {

    this.app.use(this.usuariosRoutes, require('../routes/users.routes'));

  }

  middlewares() {

    // Middleware de cors
    this.app.use(cors());

    // Usamos este middleware para poder leer y parsear del body cuando recibimos data en los post, put, etc
    this.app.use(express.json());

    // Path de webs publico
    this.app.use(express.static("src/public"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Escuchando en el puerto: ", this.port);
    });
  }
};
