const mongoose = require('mongoose'),
  Schema = mongoose.Schema

let CitasSchema = new Schema({
  paciente: {
  type: Schema.Types.ObjectId,
  ref: 'Paciente',
  recurrencia: Number,
  }, 
  sesiones: [{
    numero: Number,
    tratamiento: String,
    descripcion: String,
    estado: {
      type: Boolean,
      default: true
    },
    fechaprogramada: Number,
    fechaejecutada: Number,
    tipocita: String,
    doctor: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor'
    },
    sucursal: {
      type: Schema.Types.ObjectId,
      ref: 'Sucursal'
    }
  }],
  
})

module.exports = mongoose.model('Citas', CitasSchema, 'citas')