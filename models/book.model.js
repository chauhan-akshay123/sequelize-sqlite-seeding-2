let { DataTypes, sequelize } = require("../lib/");

let book = sequelize.define("book", 
{
title: DataTypes.TEXT,
genre: DataTypes.TEXT,
author: DataTypes.TEXT,
publication_year: DataTypes.INTEGER,
publisher: DataTypes.TEXT,
pages: DataTypes.INTEGER,
});

module.exports = { book };