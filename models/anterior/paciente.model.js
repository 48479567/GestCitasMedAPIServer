const mongoose = require('mongoose'),
      Schema = mongoose.Schema

let PacienteSchema = new Schema({
  dni: String,
  nombres: String,
  edad: Number,
  telefono: String,
  tipo: String,
  fecharegistro: Date,
  sucursal: {
    type: Schema.Types.ObjectId,
    ref: 'Sucursal'
  },
  ultimodoctor: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  citas: [{
    type: Schema.Types.ObjectId,
    ref: 'Cita'
  }]
})

module.exports = mongoose.model('Paciente', PacienteSchema, 'paciente')