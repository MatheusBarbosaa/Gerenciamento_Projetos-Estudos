const express = require('express'); //importando o express
const path = require('path');//modulo do node para trabalhar com caminhos

const app = express() //instanciando uma função express para começar a criar minhas rotas
const tabela = require('./src/models/tabela'); //importando o arquivo das tabelas
const { error } = require('console');
const sequelize = require('./src/models/conexao');
const { Sequelize } = require('sequelize');
const Gerenciamento = require('./src/models/tabela');

app.use(express.json()); //minha aplicação recebe dados do tipo json

app.use(express.urlencoded({ extended: false }));
app.use(express.json());//configuração para receber resposta do cliente, dados inseridos.

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
    res.status(200).redirect('/index.html');
});

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/criarConta.html', function (req, res) {
    res.sendFile(__dirname + '/public/criarConta.html')
});



Gerenciamento.sync() // sincronizando o modelo com o banco de dados
    .then(() => {
        console.log('Modelo sincronizado com o banco de dados.');
    })
    .catch(error => {

        console.error('Erro ao sincronizar o modelo com o banco de dados:', error);
    });

app.listen(8080, function () {
    console.log("Servidor rodando em: http://localhost:8080");
});


