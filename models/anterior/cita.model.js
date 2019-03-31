const mongoose = require('mongoose'),
  Schema = mongoose.Schema

let CitasSchema = new Schema({
  paciente: {
  type: Schema.Types.ObjectId,
  ref: 'Paciente'
  },
  sesiones: [Object]
})

module.exports = mongoose.model('Citas', CitasSchema, 'citas')