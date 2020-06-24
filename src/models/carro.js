const { Sequelize } = require("sequelize");

const connection = require("../database/connection");

const carro = connection.define(
  "carro",
  {
    marca: Sequelize.TEXT,
    modelo: Sequelize.TEXT,
    ano: Sequelize.INTEGER,
    valor: Sequelize.INTEGER,
    data_cadastro: Sequelize.DATE,
  },
  {
    timestamps: false,
    tableName: "carro",
  }
);

module.exports = carro;
