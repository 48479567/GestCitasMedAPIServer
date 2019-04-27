const mongoose = require('mongoose'),
  Schema = mongoose.Schema

let CitaSchema = new Schema({
  idpaciente: {
    type: Schema.Types.ObjectId,
    ref: 'Paciente'
  },
  numero: Number,
  tratamiento: String,
  descripcion: String,
  estado: {
    type: Boolean,
    default: false
  },
  fechaprogramada: Number,
  fechaejecutada: Number,
  recurrencia: Number,
  tipocita: String,
  doctor: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  sucursal: {
    type: Schema.Types.ObjectId,
    ref: 'Sucursal'
  }
})

module.exports = mongoose.model('Cita', CitaSchema, 'cita')