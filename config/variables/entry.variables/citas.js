const { indicadorDia, } = require('../static.variables/date'),
  { diasInfante, diasGestante, } = require('../static.variables/dias.citas')


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
    case 'infante':
      diasTratamiento = diasInfante
      break
    case 'gestante':
      diasTratamiento = diasGestante
      break
  }

  let citas = [];

  for (let numero = 1; numero < diasTratamiento.length; numero++) {
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