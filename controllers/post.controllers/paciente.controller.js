const Paciente = require('../../models/paciente.model'),
  Cita = require('../../models/cita.model'),
  { entryCitas } = require('../../config/variables/entry.variables/citas')

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
    recurrencia: body.recurrencia,
    sucursal: body.sucursal,
    ultimodoctor: body.ultimodoctor,
    citaproxima: body.citaproxima,
  })
  
  let fechaProgramada = ''
  if (body.tipo == 'gestante') {
    fechaProgramada = body.fechaprimaria
  } else {
    fechaProgramada = body.fecharegistro
  }

  let pacienteId = ''

  savePaciente.save()
    .then((paciente) => {
      let entryCitasSaved = entryCitas(
        body.tipo, 
        paciente._id, 
        fechaProgramada, 
        body.recurrencia, 
        paciente.ultimodoctor, 
        paciente.sucursal)

    pacienteId = paciente._id

    return Cita.insertMany(entryCitasSaved)
      // let saveCitas = new Cita(entryCitasSaved)
      // saveCitas.save()
    })
    .then(() => {
      return res.json(pacienteId)
    })
    .catch(err => {
      console.error(err)
    })
}

module.exports = { postPaciente }

