const Doctor = require('../../models/doctor.model'),
  Sucursal = require('../../models/sucursal.model'),
  Paciente = require('../../models/paciente.model')

let getDoctores = (req, res) => {
  let idSucursal = req.params.idsucursal
  Doctor.find({sucursal: idSucursal})
    .then(data => {
      return res.json(data)
    })
    .catch(err => {
      return res.status(500).json({
        ok: false,
        err
      })
    })
}

let getDoctor = (req, res) => { 
  let dni = req.params.dni
  Doctor.findOne({dni : dni})
    .then(data => {
      return res.json(data)
    })
    .catch(err => {
      return res.status(500).json({
        ok: false,
        err
      })
    })
}

module.exports = { getDoctores, getDoctor }

