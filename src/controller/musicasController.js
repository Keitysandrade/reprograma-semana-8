
// passo-a-passo
// 1: Importar o JSON de músicas
// 2: Criar o metodo para buscar todas as músicas
// 3: Exportar o método

// ./ retornar arquivos ou pastas do mesmo diretorio
// ../ retorna arquivos ou pastas de um diretorio acima

const musicas = require('../model/musicas.json');
//const bandas =  require('../model/bandas.json')

const getAll =  (req, res) => {
    console.log(req.url);
    res.status(200).send(musicas);
    //verifica se a resposta tem status 200 (sucesso) e envia o JSON
}
// passo-a-passo
// criar metodo getById
// retornar o item daquele ID

const getByID = (req, res) => {
    const id = req.params.id

    const musicaFiltrada = musicas.find((musica)=> {
        return musica.id == id
    })
    res.status(200).send(musicaFiltrada)
}

    // 1. Criar metodo getAllBandas
    // 2. Filtrar lista de musica por artista

   // const getAllBandas =(req, res) => {
        //res.status(200).send(banda)
    //}
    const getByBanda = (req, res) => {
        const banda = req.params.banda
        const bandaFiltrado = musicas.filter ((musica) => musica.Banda == banda)

        res.status(200).send(bandaFiltrado);

    }
//criar método GetAllBandas
//2. retornar somente o nome das bandas da lista de musicas

const getAllBandas = (req,res) => {
    const banda = musicas.map((musicas) => musicas.Banda)

    res.status(200).send(banda)

}
module.exports ={getAll, getByID, getByBanda, getAllBandas}
