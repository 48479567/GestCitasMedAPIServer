const Paciente = require('../../models/paciente.model'),
  Citas = require('../../models/citas.model')

let postPaciente = (req, res) => { 
  let body = req.body
  let savePaciente = new Paciente({
    dni: body.dni,
    nombres: body.nombres,
    edad: body.edad,
    telefono: body.telefono,
    tipo: body.tipo,
    fecharegistro: body.fecharegistro,
    sucursal: body.sucursal,
    ultimodoctor: body.ultimodoctor,
    citaproxima: body.citaproxima,
    citas: "5c8494512375069042dcaaf2",
  })
  savePaciente.save()
    .then((paciente) => {
      let saveCitas = new Citas({paciente: paciente._id, sesiones: []})
      saveCitas.save()
        .then((citas) => {
          Paciente.updateOne({_id: paciente._id}, {$set: {citas: citas._id}}).then(() => {
            return res.json(citas._id)
        })
      })
    })
    .catch(err => {
      console.error(err)
    })
}

module.exports = { postPaciente }
