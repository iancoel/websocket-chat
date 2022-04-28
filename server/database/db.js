const { Sequelize } = require('sequelize')
require('dotenv').config()

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DP_PASSWORD;
const dbHost = process.env.DB_HOST;

const sequelize = new Sequelize (dbName, dbUser, dbPassword, {
  dialect: 'mysql',
  host: dbHost,
})

module.exports = sequelize;
