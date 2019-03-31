const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      axios = require('axios'),
      app = express(),
      c = console.log,
      ce = console.error,
      Schema = mongoose.Schema



// set
app
  .set('port', process.env.PORT || 3000)

  .use((req, res, next) => { 
    // Esto hace que cualquier peticion este disponible para la api.
    res.header("Access-Control-Allow-Origin", "*")
    // Añade los metodos especificos.
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    // Autorizacion a todo tipo de autentificaciones.
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
  })

  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())


//models

  //citas.model.js
  let CitasSchema = new Schema({
    paciente: {
    type: Schema.Types.ObjectId,
    ref: 'Paciente'
    },
    sesiones: [Object]
  })

  const Citas = mongoose.model('Citas', CitasSchema, 'citas')


  //doctor.model.js

  let DoctorSchema = new Schema({
    dni: String,
    password: String,
    nombres: String,
    telefono: String,
    pacientes: [{
      type: Schema.Types.ObjectId,
      ref: 'Paciente'
    }],
    sucursal: {
      type: Schema.Types.ObjectId,
      ref: 'Sucursal'
    }
  })

  const Doctor = mongoose.model('Doctor', DoctorSchema, 'doctor')

  //paciente.model.js
  let PacienteSchema = new Schema({
    dni: String,
    nombres: String,
    edad: Number,
    telefono: String,
    tipo: String,
    fecharegistro: Date,
    sucursal: {
      type: Schema.Types.ObjectId,
      ref: 'Sucursal'
    },
    ultimodoctor: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor'
    },
    citaproxima: Number,
    citas: {
      type: Schema.Types.ObjectId,
      ref: 'Cita'
    }
  })

  const Paciente = mongoose.model('Paciente', PacienteSchema, 'paciente')

  //sucursal.model.js

  let SucursalSchema = new Schema({
    nombre: String,
    direccion: String,
    encargado: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor'
    },
    doctores: [{
      type: Schema.Types.ObjectId,
      ref: 'Doctor'
    }],
    pacientes: [{
      type: Schema.Types.ObjectId,
      ref: 'Paciente'
    }]
  })

  const Sucursal = mongoose.model('Sucursal', SucursalSchema, 'sucursal')


//controllers

//getControllers
  //citas.controller.js
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

  //dni.controller.js
  let ajaxDNI = (dni) => {

    return axios.get(`http://aplicaciones007.jne.gob.pe/srop_publico/consulta/afiliado/GetNombresCiudadano?DNI=${encodeURI(dni)}&fbclid=IwAR249a1kst2Gy0tRbipqdMhRkSy9vV5yZz6vokFiw9Bf6i0zc32G0o0bmRw`)
  
  }
  
  let getDNI = (req, res, next) => {
  
    let dni = req.params.dni
  
    ajaxDNI(dni)
      .then(data => {
        let datoLegible = data.data.split('|').join(' ')
        let objetoDNI = { nombres: datoLegible }
        return res.send(objetoDNI)
      })
      .catch(err => {
        return res.status(500).json({
          ok: false,
          err
        })
      })
  
    }

  //doctor.contoller
  let getDoctores = (req, res) => {
    let idSucursal = req.params.idsucursal
    Doctor.find({sucursal: idSucursal})
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

  //paciente.controller.js
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
  
  let getPaciente = (req, res) => {
    let idPaciente = req.params.id
    Paciente.findOne({_id: idPaciente})
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
  
  let getPacienteByDNI = (req, res) => {
    let dniPaciente = req.params.dni
    Paciente.findOne({dni: dniPaciente})
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

  //sucursal.controller.js
  let getSucursales = (req, res) => { 
    Sucursal.find({}).
      then(data => {
        return res.json(data)
      })
      .catch(err => {
        return res.status(500).json({
          ok: false,
          err
        })
      })
  }

//postcontroller
  //paciente.controller.js
  let postPaciente = (req, res) => { 
    let body = req.body
    let savePaciente = new Paciente({
      dni: body.dni,
      nombres: body.nombres,
      edad: body.edad,
      telefono: body.telefono,
      tipo: body.tipo,
      fecharegistro: body.fecharegistro,
      sucursal: body.sucursal,
      ultimodoctor: body.ultimodoctor,
      citaproxima: body.citaproxima,
      citas: "5c8494512375069042dcaaf2",
    })
    savePaciente.save()
      .then((paciente) => {
        let saveCitas = new Citas({paciente: paciente._id, sesiones: []})
        saveCitas.save()
          .then((citas) => {
            Paciente.updateOne({_id: paciente._id}, {$set: {citas: citas._id}}).then(() => {
              return res.json(citas._id)
          })
        })
      })
      .catch(err => {
        console.error(err)
      })
  }


//put.controllers
  //citas.controller.js
  let putCita = (req, res) => { 
    let body = req.body,
      { id } = req.params,
      { index } = req.params
  
    Citas.findOneAndUpdate({_id: id}, { $set: {[`sesiones.${index}`]: body}})
      .then(data => {
        console.log(data)
        return res.json(data._id)
      })
      .catch(err => {
        console.error(err)
      })
  }

  //doctor.controller.js
  let putDoctor = (req, res) => {
    let body = req.body,
      id = req.params.id
    Doctor.findOneAndUpdate({_id: id}, {$set: body})
      .then(data => {
        return res.json({
          data
        })
      })
      .catch(err => {
        return res.status(500).json({
          ok: false,
          err
        })
      })
  }



app
  .get('/', (req, res) => { 
    res.send('API del Servidor del Sistema de Gestión de Consultas Médicas')
  })

  .get('/sucursales', getSucursales)
  .get('/doctores/:idsucursal', getDoctores)
  .get('/doctor/:dni', getDoctor)
  .get('/pacientes/:idsucursal', getPacientes)
  .get('/pacientes/:idsucursal/:tipo', getPacientesTipo)
  .get('/paciente/:id', getPaciente)
  .get('/paciente/dni/:dni', getPacienteByDNI)
  .get('/paciente/citas/:idpaciente', getCitasByPaciente)
  .get('/citas/:id', getCitas)
  .get('/cita/:id/:index', getCita)
  .get('/dni/:dni', getDNI)

  .post('/paciente', postPaciente)
  .put('/doctor/:id', putDoctor)
  .put('/cita/:id/:index', putCita)

mongoose.connect('mongodb://localhost/gcm', { useNewUrlParser: true })
  .then(db => c('Conectado a la Base de Datos'))
  .catch(err => ce(err))

app.listen(app.get('port'), () => { 
  c(`API Servidor corriendo en el puerto ${app.get('port')}`)
})
