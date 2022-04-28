const { Sequelize } = require('sequelize')
import dotenv from "dotenv/config.js";

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DP_PASSWORD;
const dbHost = process.env.DB_HOST;

const sequelize = new Sequelize (dbName, dbUser, dbPassword, {
  dialect: 'mysql',
  host: dbHost,
})

export default sequelize;
