const express = require('express'),

      { getDNI } = require('../controllers/get.controllers/dni.controller'),

      { getSucursales } = require('../controllers/get.controllers/sucursal.controller'),
      { getDoctores, getDoctor } = require('../controllers/get.controllers/doctor.controller'),
      { getPacientes, getPaciente, getPacienteByDNI, getPacientesTipo } = require('../controllers/get.controllers/paciente.controller'),
      { getCitasByPaciente } = require('../controllers/get.controllers/cita.controller'),

      { putDoctor } = require('../controllers/put.controllers/doctor.controller'),
      { putCita } = require('../controllers/put.controllers/cita.controller'),

      { postPaciente } = require('../controllers/post.controllers/paciente.controller'),
      // { postCitaVacia } = require('../controllers/post.controllers/citas.controller')

      router = express.Router()

//router get
router
  .get('/sucursales', getSucursales)
  .get('/doctores/:idsucursal', getDoctores)
  .get('/doctor/:dni', getDoctor)
  .get('/pacientes/:idsucursal', getPacientes)
  .get('/pacientes/:idsucursal/:tipo', getPacientesTipo)
  .get('/paciente/:id', getPaciente)
  .get('/paciente/dni/:dni', getPacienteByDNI)
  .get('/paciente/citas/:idpaciente', getCitasByPaciente)
  // .get('/citas/:id', getCitas)
  // .get('/cita/:id/:index', getCita)
  .get('/dni/:dni', getDNI)
  // .post('/paciente')

//router post
router
  .post('/paciente', postPaciente)
  // .post('/citas/:idpaciente', postCitaVacia)

//router put
router
  .put('/doctor/:id', putDoctor)
  .put('/cita/:id/:index', putCita)

module.exports = router