const mongoose = require('mongoose'),
  Schema = mongoose.Schema

let DoctorSchema = new Schema({
  dni: String,
  password: String,
  nombres: String,
  telefono: String,
  pacientes: [{
    type: Schema.Types.ObjectId,
    ref: 'Paciente'
  }],
  sucursal: {
    type: Schema.Types.ObjectId,
    ref: 'Sucursal'
  }
})

module.exports = mongoose.model('Doctor', DoctorSchema, 'doctor')