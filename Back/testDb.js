require('dotenv').config()
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(`mssql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`) // Example for postgres
const testDb = async () => {
  try {
    await sequelize.authenticate()
    console.log('Conexion correcta.')
  } catch (err) {
    console.log('No se puede conectar a la BD')
    return process.exit(1)
  }

  return null
}

module.exports = { testDb }