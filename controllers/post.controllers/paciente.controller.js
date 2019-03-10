const Paciente = require('../../models/paciente.model'),
  Cita = require('../../models/citas.model')

let postPaciente = (req, res) => { 
  let body = req.body
  Paciente.insert(body.paciente)
    .then(() => {
      Cita.insert(body.citas)
    })
    .then((data) => {

    })
    .catch(err => {
      return res.status(500).json({
        ok: false,
        err
      })
    })
}

module.exports = { postPaciente }

