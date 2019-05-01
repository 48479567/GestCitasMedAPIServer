const express = require('express'),

      { getDNI } = require('../controllers/get.controllers/dni.controller'),

      { getSucursales } = require('../controllers/get.controllers/sucursal.controller'),
      { getDoctores, getDoctor } = require('../controllers/get.controllers/doctor.controller'),
      { getPacientes, getPaciente, getPacienteByDNI, getPacientesTipo } = require('../controllers/get.controllers/paciente.controller'),
      // { getCitasByPaciente } = require('../controllers/get.controllers/cita.controller'),
      { getCitasByPaciente, getCitas, getCita } = require('../controllers/get.controllers/citas.controller'),
       
      { putDoctor } = require('../controllers/put.controllers/doctor.controller'),
      // { putCita } = require('../controllers/put.controllers/cita.controller'),

      { postPaciente } = require('../controllers/post.controllers/paciente.controller'),
      { postDoctor } = require('../controllers/post.controllers/doctor.controller'),
      { putCita, putCitaByPaciente } = require('../controllers/put.controllers/citas.controller'),
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
  .get('/citas/:id', getCitas)
  .get('/paciente/citas/:idpaciente', getCitasByPaciente)
  .get('/cita/:id/:index', getCita)
  .get('/dni/:dni', getDNI)
  // .post('/paciente')

//router post
router
  .post('/paciente', postPaciente)
  .post('/doctores', postDoctor)
  // .post('/citas/:idpaciente', postCitaVacia)

//router put
router
  .put('/doctor/:id', putDoctor)
  .put('/cita/:id/:index', putCita)
  .put('/paciente/citas/:idpaciente/:index', putCitaByPaciente)

module.exports = router