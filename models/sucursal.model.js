const mongoose = require('mongoose'),
  Schema = mongoose.Schema

let SucursalSchema = new Schema({
  nombre: String,
  direccion: String,  
})

module.exports = mongoose.model('Sucursal', SucursalSchema, 'sucursal')