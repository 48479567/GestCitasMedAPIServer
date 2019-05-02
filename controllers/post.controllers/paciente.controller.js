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
    fechaprimaria: body.fechaprimaria,
    estado: true,
    recurrencia: body.recurrencia,
    sucursal: body.sucursal,
    ultimodoctor: body.ultimodoctor,
    citaproxima: body.citaproxima,
  })
  
  savePaciente.save()
    .then((paciente) => {
      let saveCita = new Citas({
        paciente: paciente._id,
        recurrencia: paciente.recurrencia,
        sesiones: [],
      })

      return saveCita.save()
    })
    .then((citas) => {
      return res.json(citas)
    })
    .catch(err => {
      console.error(err)
    })
}

module.exports = { postPaciente }

