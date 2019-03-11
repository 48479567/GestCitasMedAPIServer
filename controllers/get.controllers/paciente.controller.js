const Sucursal = require('../../models/sucursal.model'),
  Paciente = require('../../models/paciente.model'),
  Doctor = require('../../models/doctor.model'),
  Citas = require('../../models/citas.model')

let getPacientes = (req, res) => { 
  let idSucursal = req.params.idsucursal
  Sucursal.findById(idSucursal).populate('pacientes')
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


let getPacientesTipo = (req, res) => { 
  let idSucursal = req.params.idsucursal,
  tipo = req.params.tipo
  Paciente.find({sucursal: idSucursal, tipo: tipo})
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

let getPaciente = (req, res) => {
  let idPaciente = req.params.id
  Paciente.findOne({_id: idPaciente})
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

let getPacienteByDNI = (req, res) => {
  let dniPaciente = req.params.dni
  Paciente.findOne({dni: dniPaciente})
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

module.exports = { getPacientes, getPaciente, getPacienteByDNI, getPacientesTipo }