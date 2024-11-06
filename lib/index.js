let sq = require("sequelize");

let sequelize = new sq.Sequelize({
   dialect: "sqlite",  // specifies the database type as sqlite
   storage: "./database.sqlite" // path to sqlite database file
});

module.exports = { 
  DataTypes: sq.DataTypes,
  sequelize
 };