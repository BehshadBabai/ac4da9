const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL || "postgres://localhost:3001/messenger", {
  logging: false 
});

module.exports = db; 