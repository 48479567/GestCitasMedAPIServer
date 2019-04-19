const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      app = express(),
      CONNECTION_URI = 'mongodb+srv://admin:admin@clusterprojects-e96mt.mongodb.net/gcm?retryWrites=true'
      c = console.log,
      ce = console.error,

// set
app
  .set('port', process.env.PORT || 3000)
  .set('connecturi', 'mongodb://localhost/gcm')

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


//Esto mayormente sirve para la implementacion de promesas nativas. Ahora no es tan necesario la implementacion
mongoose.Promise = global.Promise
// mongoose.set('debug', true)

mongoose.connect(app.get('connecturi'), { useNewUrlParser: true })
  .then(db => c('Conectado a la Base de Datos'))
  .catch(err => ce(err))

app.listen(app.get('port'), () => { 
  c(`API Servidor corriendo en el puerto ${app.get('port')}`)
})

