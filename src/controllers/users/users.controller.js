const { request, response } = require('express');

const usersGet = (req = request, res = response) => {

    // Aca obtenemos todos los query params parceados 
    // const queryParams = req.query;

    // De esta otra manera solo nos quedamos con las variables que nos interesan y podemos asignarle valores por defecto en caso que no lo hayan definido
    const { query, 
            name = 'no name', 
            page = 1, 
            limit = 10 
          } = req.query;

    res.json({
      msg: "api-get",
      name,
      page,
      limit
    });

};

const usersPost = (req = request, res = response) => {

  const { nombre, edad } = req.body;

  res.json( {
    nombre,
    edad
  });

};


const usersPut = (req = request, res = response) => {

  const id = req.params.id;

  res.json( {
    msg: "api-put",
    id
  });

};

const usersPatch = (req = request, res = response) => {

  res.json({
    msg: "api-patch"
  });

};


const usersDelete = (req = request, res = response) => {

  res.json({
    msg: "api-delete"
  });

}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}