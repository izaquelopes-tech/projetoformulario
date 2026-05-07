const express = require ('express');
const mysql = require ('mysql2');
const cors = require ('cors');

const app = express();
app.use(cors());
app.use(express.json());

//conexão banco de dados

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'loja_carro'

})

//teste
app.get('/', (req,res) => {
    res.send('API funcionando');
});

//salvar carros
app.post('/carros', (req,res) =>{
    const {titulo, marca, cambio, preco, modelo} req = req.body;
    const sql = `INSERT INTO carros (titulo, preco, marca, modelo, kilometragem, data_compra, cambio) VALUES (?,?,?,?,?,?,?,?)`;
 
})