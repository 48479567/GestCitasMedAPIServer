const Sucursal = require('../../models/sucursal.model'),
  Doctor = require('../../models/doctor.model'),
  Paciente = require('../../models/paciente.model'),
  Cita = require('../../models/citas.model')

let putDoctor = (req, res) => {
  let body = req.body,
    id = req.params.id
  Doctor.findOneAndUpdate({_id: id}, {$set: body})
    .then(data => {
      return res.json({
        data
      })
    })
    .catch(err => {
      return res.status(500).json({
        ok: false,
        err
      })
    })
}

module.exports = { putDoctor }