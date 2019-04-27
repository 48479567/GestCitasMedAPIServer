const mongoose = require('mongoose'),
      Schema = mongoose.Schema

let PacienteSchema = new Schema({
  dni: String,
  nombres: String,
  edad: Number,
  telefono: String,
  tipo: String,
  fecharegistro: Number,
  fechaprimaria: Number,
  recurrencia: Number,
  sucursal: {
    type: Schema.Types.ObjectId,
    ref: 'Sucursal'
  },
  ultimodoctor: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  citaproxima: Number,
  
})

module.exports = mongoose.model('Paciente', PacienteSchema, 'paciente')
