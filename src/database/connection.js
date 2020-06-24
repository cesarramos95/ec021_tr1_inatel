const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ec021_2020_1", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
