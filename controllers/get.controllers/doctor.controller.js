const Doctor = require('../../models/doctor.model'),
  Sucursal = require('../../models/sucursal.model'),
  Paciente = require('../../models/paciente.model')

let getDoctores = (req, res) => {
  let idSucursal = req.params.idsucursal
  Sucursal.findById(idSucursal).populate('doctores')
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

let getDoctor = (req, res) => { 
  let dni = req.params.dni
  Doctor.findOne({dni : dni})
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

module.exports = { getDoctores, getDoctor }

// let doctores = [
//   {dni: "77777701", password: "password01", nombres: "doctor 1", telefono: "999999901", pacientes: ["paciente 1", "paciente 2"], sucursal: "Sucusal 1"},
// {dni: "77777702", password: "password02", nombres: "doctor 2", telefono: "999999902", pacientes: ["paciente 3"], sucursal: "Sucursal 1"},
// {dni: "77777703", password: "password03", nombres: "doctor 3", telefono: "999999903", pacientes: ["paciente 4"], sucursal: "Sucursal 2"},
// {dni: "77777704", password: "password04", nombres: "doctor 4", telefono: "999999904", pacientes: ["paciente 5", "paciente 6"], sucursal: "Sucursal 2"},
// {dni: "77777705", password: "password05", nombres: "doctor 5", telefono: "999999905", pacientes: ["paciente 7", "paciente 8"], sucursal: "Sucursal 3"},
// {dni: "77777706", password: "password06", nombres: "doctor 4", telefono: "999999904", pacientes: ["paciente 9"], sucursal: "Sucursal 3"}
// ]

// {nombre: "Sucursal 2", direccion: "Direccion Sucursal 2", encargado: "doctor 4", doctores: ["doctor 3", "doctor 4"], pacientes: ["paciente 4", "paciente 5", "paciente 6"]},
// {nombre: "Sucursal 3", direccion: "Direccion Sucursal 3", encargado: "doctor 5", doctores: ["doctor 5", "doctor 6"], pacientes: ["paciente 7", "paciente 8", "paciente 9"]}
// ]
// doctores por orden:
// ObjectId("5c7c7c320e1e74bee99ae988")
// ObjectId("5c7c7c480e1e74bee99ae99a")
// ObjectId("5c7c7c790e1e74bee99ae9d2")
// ObjectId("5c7c7ca104113717318d7937")
// ObjectId("5c7c7ca104113717318d7938")
// ObjectId("5c7c7ca104113717318d7939")

// sucursales por orden: 
// ObjectId("5c7c7ce104113717318d793a")
// ObjectId("5c7c7ce104113717318d793b")
// ObjectId("5c7c7ce104113717318d793c")

