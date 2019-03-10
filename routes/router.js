const express = require('express'),

      { getDNI } = require('../controllers/get.controllers/dni.controller'),

      { getSucursales } = require('../controllers/get.controllers/sucursal.controller'),
      { getDoctores, getDoctor } = require('../controllers/get.controllers/doctor.controller'),
      { getPacientes, getPaciente, getPacientesTipo } = require('../controllers/get.controllers/paciente.controller'),
      { getCitasByPaciente, getCitas, getCita } = require('../controllers/get.controllers/citas.controller'),

      { putDoctor } = require('../controllers/put.controllers/doctor.controller'),

      router = express.Router()

//router get
router
  .get('/sucursales', getSucursales)
  .get('/doctores/:idsucursal', getDoctores)
  .get('/doctor/:dni', getDoctor)
  .get('/pacientes/:idsucursal', getPacientes)
  .get('/pacientes/:idsucursal/:tipo', getPacientesTipo)
  .get('/paciente/:id', getPaciente)
  .get('/paciente/citas/:idpaciente', getCitasByPaciente)
  .get('/citas/:id', getCitas)
  .get('/cita/:id/:index', getCita)
  .get('/dni/:dni', getDNI)
  // .post('/paciente')

//router post


//router put
router
  .put('/doctor/:id', putDoctor)

module.exports = router