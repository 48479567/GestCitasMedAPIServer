const mongoose = require('mongoose'),
  Schema = mongoose.Schema

let SucursalSchema = new Schema({
  nombre: String,
  direccion: String,
  encargado: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  doctores: [{
    type: Schema.Types.ObjectId,
    ref: 'Doctor'
  }],
  pacientes: [{
    type: Schema.Types.ObjectId,
    ref: 'Paciente'
  }]
})

module.exports = mongoose.model('Sucursal', SucursalSchema, 'sucursal')