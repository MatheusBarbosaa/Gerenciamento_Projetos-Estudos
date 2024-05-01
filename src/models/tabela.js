const Sequelize = require('sequelize');
const db = require('./conexao');

const Gerenciamento = db.define('Gerenciamento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Gerenciamento.sync();//cria a tabela no banco de dados

module.exports = Gerenciamento;