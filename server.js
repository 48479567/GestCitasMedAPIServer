const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      bcrypt = require('bcryptjs'),
      hbs = require('hbs'),
      path = require('path'),
      app = express(),
      CONNECTION_URI = 'mongodb+srv://admin:admin@clusterprojects-e96mt.mongodb.net/gcm?retryWrites=true'
      c = console.log,
      ce = console.error,

// hbs.registerPartial(path.join(__dirname, 'views', 'partials'))

// sett
app
  .set('port', process.env.PORT || 3000)
  .set('connecturi', 'mongodb://localhost/gcm')
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')


  .use((req, res, next) => { 
    // Esto hace que cualquier peticion este disponible para la api.
    res.header("Access-Control-Allow-Origin", "*")
    // Añade los metodos especificos.
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    // Autorizacion a todo tipo de autentificaciones.
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, 'public')))

  .get('/', (req, res) => { 
    res.render('index')
  })


app.use(require('./routes'))


//Esto mayormente sirve para la implementacion de promesas nativas. Ahora no es tan necesario la implementacion
mongoose.Promise = global.Promise
mongoose.set('useFindAndModify', false)
// mongoose.set('debug', true)

mongoose.connect(app.get('connecturi'), { useNewUrlParser: true })
  .then(db => c('Conectado a la Base de Datos'))
  .catch(err => ce(err))

app.listen(app.get('port'), () => { 
  c(`API Servidor corriendo en el puerto ${app.get('port')}`)
})

