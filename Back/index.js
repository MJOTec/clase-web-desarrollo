require('dotenv').config()
const cors = require('cors');
const { Sequelize, Model, DataTypes } = require('sequelize')
const express = require('express');
const { testDb } = require('./testDB');
const app = express()

//middelware json y cors
app.use(express.json());
app.use(cors());

const sequelize = new Sequelize(`mssql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`) // Example for postgres

//Declaracion del Modelo (tablas de la DB)

class Papas extends Model {}
Papas.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  important: {
    type: DataTypes.BOOLEAN
  },
  date: {
    type: DataTypes.DATE
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'Papas'
})
// Inicializar tabla si no existe en la DB
Papas.sync()

//endpoint all notes
app.get('/api/notes', async (req, res) => {
    const notes = await Papas.findAll()
    console.log(notes.map(n=>n.toJSON()))
    res.json(notes)
  })
  
//endpoint create note
app.post('/api/notes', async (req, res) => {
      console.log(req.body)
      const note = await Papas.create(req.body)
      res.json(note)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})