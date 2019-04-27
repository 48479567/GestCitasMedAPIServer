const Doctor = require('../../models/doctor.model')

let postDoctor = (req, res) => { 
  let body = req.body

  let saveDoctor = new Doctor({
    dni: body.dni,
    password: body.dni,
    sucursal: body.sucursal,

  })

  saveDoctor.save()
    .then((doctor) => {
      res.redirect(`/api/doctor/${doctor.dni}`)
    })
    .catch((err) => console.error(err))
}

module.exports = { postDoctor }