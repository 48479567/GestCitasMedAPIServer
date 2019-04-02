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
    citas: "5c8494512375069042dcaaf2",
  })
  
  let fechaProgramada = ''
  if (body.tipo == 'embarazo' || body.tipo == 'cred') {
    fechaProgramada = body.fechaprimaria
  } else {
    fechaProgramada = body.fecharegistro
  }

  savePaciente.save()
    .then((paciente) => {
      let entryCitasSaved = entryCitas(
        body.tipo, 
        paciente._id, 
        fechaProgramada, 
        body.recurrencia, 
        paciente.ultimodoctor, 
        paciente.sucursal)

      Cita.insertMany(entryCitasSaved)
    .then(
      console.log('Guardado con exito')
    )
      // let saveCitas = new Cita(entryCitasSaved)
      // saveCitas.save()
      return res.json(paciente._id)
    })
    .catch(err => {
      console.error(err)
    })
}

module.exports = { postPaciente }

