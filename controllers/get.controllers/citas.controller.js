const Citas = require('../../models/citas.model')


let getCitasByPaciente = (req, res) => { 
  let { idpaciente } = req.params
  Citas.findOne({ paciente: idpaciente })
    .then(cita => {
      return res.json(cita)
    })
    .catch(err => {
      return res.status(500).json({
        ok: false,
        err
      })
    })
}


let getCitas = (req, res) => {
  let { id } = req.params
  Citas.findById(id)
    .then(cita => {
      return res.json(cita)
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
  Citas.findOne({ _id: idCita })
    .then(cita => {
      let sesiones = cita.sesiones
      return res.json(sesiones[indexSesion])
    })
    .catch(err => {
      return res.status(500).json({
        ok: false,
        err
      })
    })
}


module.exports = { getCitasByPaciente, getCita, getCitas, }


