const Sucursal = require('../../models/sucursal.model'),
  Paciente = require('../../models/paciente.model'),
  Doctor = require('../../models/doctor.model'),
  Cita = require('../../models/cita.model')

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

let getPaciente = (req, res) => {
  let idPaciente = req.params.id
  Paciente.findById(idPaciente)
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

module.exports = { getPacientes, getPaciente, getPacientesTipo }

// {
//   "_id" : ObjectId("5c7c7ce104113717318d793a"),
//   "nombre" : "Sucursal 1",
//   "direccion" : "Direccion Sucursal 1",
//   "encargado" : ObjectId("5c7c7c320e1e74bee99ae988"),
//   "doctores" : [ 
//       ObjectId("5c7c7c320e1e74bee99ae988"), 
//       ObjectId("5c7c7c480e1e74bee99ae99a")
//   ],
//   "pacientes" : [ 
//       ObjectId("5c7ccec104113717318d7967"), 
//       ObjectId("5c7ccec104113717318d7968"), 
//       ObjectId("5c7ccec104113717318d7969")
//   ]
// }



// let pacientes = [
//   { dni: "77777711", nombres: "paciente 1", edad: 31, telefono: "999999911", sucursal: ObjectId("5c7c7ce104113717318d793a"), ultimodoctor: ObjectId("5c7ccf6804113717318d796a"), citas: [ObjectId("5c7ccc8c04113717318d795b"), ObjectId("5c7ccc8c04113717318d795c"), ObjectId("5c7ccc8c04113717318d795d"), ObjectId("5c7ccc8c04113717318d795e")]},
//   { dni: "77777712", nombres: "paciente 2", edad: 32, telefono: "999999912", sucursal: ObjectId("5c7c7ce104113717318d793a"), ultimodoctor: ObjectId("5c7ccf6804113717318d796a"), citas: [ObjectId("5c7cccb804113717318d795f"), ObjectId("5c7cccb804113717318d7960"), ObjectId("5c7cccb804113717318d7961"), ObjectId("5c7cccb804113717318d7962")]},
//   { dni: "77777713", nombres: "paciente 3", edad: 33, telefono: "999999913", sucursal: ObjectId("5c7c7ce104113717318d793a"), ultimodoctor: ObjectId("5c7ccf6804113717318d796b"), citas: [ObjectId("5c7ccd4c04113717318d7963"), ObjectId("5c7ccd4c04113717318d7964"), ObjectId("5c7ccd4c04113717318d7965"), ObjectId("5c7ccd4c04113717318d7966")]},
//   { dni: "77777714", nombres: "paciente 4", edad: 34, telefono: "999999914", sucursal: ObjectId("5c7c7ce104113717318d793b"), ultimodoctor: ObjectId("5c7ccf6804113717318d796c"), citas: [
//     ObjectId("5c7dfd180741b8a512212dd6"),
//     ObjectId("5c7dfd180741b8a512212dd7"),
//     ObjectId("5c7dfd180741b8a512212dd8"),
//     ObjectId("5c7dfd180741b8a512212dd9")
//   ]},
//   { dni: "77777715", nombres: "paciente 5", edad: 35, telefono: "999999915", sucursal: ObjectId("5c7c7ce104113717318d793b"), ultimodoctor: ObjectId("5c7ccf6804113717318d796d"), citas: [
//     ObjectId("5c7e01140741b8a512212dda"),
//     ObjectId("5c7e01140741b8a512212ddb"),
//     ObjectId("5c7e01140741b8a512212ddc"),
//     ObjectId("5c7e01140741b8a512212ddd")
//   ]},
//   { dni: "77777716", nombres: "paciente 6", edad: 36, telefono: "999999916", sucursal: ObjectId("5c7c7ce104113717318d793b"), ultimodoctor: ObjectId("5c7ccf6804113717318d796d"), citas: [
//     ObjectId("5c7e013c0741b8a512212dde"),
//     ObjectId("5c7e013c0741b8a512212ddf"),
//     ObjectId("5c7e013c0741b8a512212de0"),
//     ObjectId("5c7e013c0741b8a512212de1")
//   ]},
//   { dni: "77777717", nombres: "paciente 7", edad: 37, telefono: "999999917", sucursal: ObjectId("5c7c7ce104113717318d793c"), ultimodoctor: ObjectId("5c7ccf6804113717318d796e"), citas: [
//     ObjectId("5c7e017b0741b8a512212de2"),
//     ObjectId("5c7e017b0741b8a512212de3"),
//     ObjectId("5c7e017b0741b8a512212de4"),
//     ObjectId("5c7e017b0741b8a512212de5")
//   ]},
//   { dni: "77777718", nombres: "paciente 8", edad: 38, telefono: "999999918", sucursal: ObjectId("5c7c7ce104113717318d793c"), ultimodoctor: ObjectId("5c7ccf6804113717318d796e"), citas: [
//     ObjectId("5c7e018c0741b8a512212de6"),
//     ObjectId("5c7e018c0741b8a512212de7"),
//     ObjectId("5c7e018c0741b8a512212de8"),
//     ObjectId("5c7e018c0741b8a512212de9")
//   ]},
//   { dni: "77777719", nombres: "paciente 9", edad: 39, telefono: "999999919", sucursal: ObjectId("5c7c7ce104113717318d793c"), ultimodoctor: ObjectId("5c7ccf6804113717318d796f"), citas: [
//     ObjectId("5c7e01f20741b8a512212dea"),
//     ObjectId("5c7e01f20741b8a512212deb"),
//     ObjectId("5c7e01f20741b8a512212dec"),
//     ObjectId("5c7e01f20741b8a512212ded")
//   ]},
// ]