//Passo a passo

//1.importar o express
//2. Criar o app a partir do express (declarar a variável app atribuindo o express)
//3. Importar a rota
//4. Usar a rota criada
//5. Exportar o app

const express = require ('express');
const app = express ();

const musicas = require ('./routes/musicasRoutes');

app.use ('/', musicas);
app.get('*',(req, res) => {

    res.status(404).sendFile('./views/404.html', { root: __dirname })

})

module.exports = app;