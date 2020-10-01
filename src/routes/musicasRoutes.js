//passo a passo

//1.Importar o express
//2.Importar o Router
//3. Importar o controller
//4.Criar a rota que tras todos os itens 
//5. Exportar o router

const express = require ('express');
const route = express.Router();
const controller = require ('../controller/musicasController')

route.get("/musicas", controller.getAll);
route.get('/musicas/:id', controller.getByID);
route.get('/bandas', controller.getAllBandas);
route.get('/musicas/banda/:banda', controller.getByBanda)

module.exports = route;
