const Citas = require('../../models/citas.model'),
  Sucursal = require('../../models/sucursal.model'),
  Paciente = require('../../models/paciente.model'),
  Doctor = require('../../models/doctor.model')

let getCitasByPaciente = (req, res) => { 
  let { idpaciente } = req.params
  Citas.findOne({paciente: idpaciente})
    .then(data => {
      return res.json(data.sesiones)
    })
    .catch(err => {
      return res.status(500).json({
        ok: false,
        err
      })
    })
}


let getCitas = (req, res) => {
  let id = req.params.id
  Citas.findById(id)
    .then(data => {
      return res.json(data.sesiones);
    })
    .catch(err => {
      return res.status(500).json({
        ok: false,
        err
      })
    })
}

let getCita = (req, res) => {
  let idCita = req.params.id,
    indexSesion = req.params.index
  Citas.findOne({_id: idCita})
    .then(data => {
      let sesiones = data.sesiones
      return res.json(sesiones[indexSesion])
    })
    .catch(err => {
      return res.status(500).json({
        ok: false,
        err
      })
    })
}

module.exports = { getCitasByPaciente, getCita, getCitas }


