const mongoose = require('mongoose'),
  Schema = mongoose.Schema

let CitaSchema = new Schema({
  numero: Number,
  tratamiento: String,
  descripcion: String,
  estado: {
    type: Boolean,
    default: false
  },
  fechaprogramada: Date,
  fechaejecutada: Date,
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