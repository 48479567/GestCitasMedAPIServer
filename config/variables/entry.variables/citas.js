const { indicadorDia } = require('../static.variables/date'),
  { diasVacuna, diasEmbarazo, diasCred } = require('../static.variables/dias.citas')


let entryCitas = (
  tipopaciente,
  idpaciente,
  fechaprogramada,
  recurrencia,
  doctor,
  sucursal,
) => {
  let diasTratamiento = []

  switch (tipopaciente) {
    case 'vacuna':
      diasTratamiento = diasVacuna
      break
    case 'embarazo':
      diasTratamiento = diasEmbarazo
      break
    case 'cred':
      diasTratamiento = diasCred
      break
  }

  let citas = [];

  for (let numero = 0; numero < diasTratamiento.length; numero++) {
    let cita = {
      idpaciente,
      numero: numero,
      tratamiento: '',
      descripcion: '',
      estado: false,
      fechaprogramada: fechaprogramada + diasTratamiento[numero] * indicadorDia,
      fechaejecutada: 0,
      recurrencia,
      tipocita: 'normal',
      doctor,
      sucursal,
    }
    
    citas.push(cita)
  }

  return citas
}

module.exports = { entryCitas }