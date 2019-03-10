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


// let citas = [
//   {numero: 1, tratamiento: "tratamiento 1", descripcion: "descripcion de la cita 1", estado: false, fechaProgramada: new Date().getDate() + 2, fechaTratada: new Date().getDate() + 32, doctor: ObjectId("5c7ccf6804113717318d796f"), sucursal: ObjectId("5c7c7ce104113717318d793c")},

//   {numero: 2, tratamiento: "tratamiento 2", descripcion: "descripcion de la cita 2", estado: false, fechaProgramada: (new Date().getDate()) + 32, fechaTratada: new Date().getDate() + 62, doctor: ObjectId("5c7ccf6804113717318d796f"), sucursal: ObjectId("5c7c7ce104113717318d793c")},

//   {numero: 3, tratamiento: "tratamiento 3", descripcion: "descripcion de la cita 3", estado: false, fechaProgramada: new Date().getDate() + 62, fechaTratada: new Date().getDate() + 92, doctor: ObjectId("5c7ccf6804113717318d796f"), sucursal: ObjectId("5c7c7ce104113717318d793c")},

//   {numero: 4, tratamiento: "tratamiento 4", descripcion: "descripcion de la cita 4", estado: false, fechaProgramada: new Date().getDate() + 92, fechaTratada: new Date().getDate() + 122, doctor: ObjectId("5c7ccf6804113717318d796f"), sucursal: ObjectId("5c7c7ce104113717318d793c")}
// ]

// citaOrden [
//   ObjectId("5c7dfd180741b8a512212dd6"),
//   ObjectId("5c7dfd180741b8a512212dd7"),
//   ObjectId("5c7dfd180741b8a512212dd8"),
//   ObjectId("5c7dfd180741b8a512212dd9"),

//   ObjectId("5c7e01140741b8a512212dda"),
//   ObjectId("5c7e01140741b8a512212ddb"),
//   ObjectId("5c7e01140741b8a512212ddc"),
//   ObjectId("5c7e01140741b8a512212ddd"),

//   ObjectId("5c7e013c0741b8a512212dde"),
//   ObjectId("5c7e013c0741b8a512212ddf"),
//   ObjectId("5c7e013c0741b8a512212de0"),
//   ObjectId("5c7e013c0741b8a512212de1"),

//   ObjectId("5c7e017b0741b8a512212de2"),
//   ObjectId("5c7e017b0741b8a512212de3"),
//   ObjectId("5c7e017b0741b8a512212de4"),
//   ObjectId("5c7e017b0741b8a512212de5"),

//   ObjectId("5c7e018c0741b8a512212de6"),
//   ObjectId("5c7e018c0741b8a512212de7"),
//   ObjectId("5c7e018c0741b8a512212de8"),
//   ObjectId("5c7e018c0741b8a512212de9"),

//   ObjectId("5c7e01f20741b8a512212dea"),
//   ObjectId("5c7e01f20741b8a512212deb"),
//   ObjectId("5c7e01f20741b8a512212dec"),
//   ObjectId("5c7e01f20741b8a512212ded"),
// ]
