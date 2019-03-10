const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      app = express(),
      c = console.log,
      ce = console.error

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
  .get('/', (req, res) => { 
    res.send('API del Servidor del Sistema de Gestión de Consultas Médicas')
  })

app.use(require('./routes'))

mongoose.connect('mongodb://localhost/gcm', { useNewUrlParser: true })
  .then(db => c('Conectado a la Base de Datos'))
  .catch(err => ce(err))

app.listen(app.get('port'), () => { 
  c(`API Servidor corriendo en el Puerto ${app.get('port')}`)
})

