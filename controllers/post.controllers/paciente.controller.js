const Paciente = require('../../models/paciente.model'),
  Cita = require('../../models/cita.model')

let postPaciente = (req, res) => { 
  let body = req.body
  let savePaciente = new Paciente({
    dni: body.dni,
    nombres: body.nombres,
    edad: body.edad,
    telefono: body.telefono,
    tipo: body.tipo,
    fecharegistro: body.fecharegistro,
    fechaprimaria: body.fechaprimaria,
    sucursal: body.sucursal,
    ultimodoctor: body.ultimodoctor,
    citaproxima: body.citaproxima,
    citas: "5c8494512375069042dcaaf2",
  })
  savePaciente.save()
    .then((paciente) => {
      let saveCitas = new Cita({idpaciente: paciente._id, numero: 1, tratamiento: "", descripcion: "", fechaprogramada: 5, fechaejecutada: 0, recurrencia: 1, tipocita: "normal", doctor: body.ultimodoctor, sucursal: body.sucursal})
      saveCitas.save()
      return res.json(paciente._id)
    })
    .catch(err => {
      console.error(err)
    })
}

module.exports = { postPaciente }

