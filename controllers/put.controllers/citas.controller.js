const Citas = require('../../models/citas.model'),  
  Paciente = require('../../models/paciente.model')

let putCita = (req, res) => { 
  let { body } = req,
    { id } = req.params,
    { index } = req.params
  
  let cita = {
    numero: body.numero,
    tratamiento: body.tratamiento,
    descripcion: body.descripcion,
    estado: true,
    fechaprogramada: body.fechaprogramada,
    fechaejecutada: body.fechaejecutada,
    tipocita: body.tipocita,
    doctor: body.doctor,
    sucursal: body.sucursal

  }
 
  Citas.findOneAndUpdate({ _id: id }, { $set: { [`sesiones.${index}`]: cita } })
    .then((data) => {
      return Paciente.findOneAndUpdate({ _id: body.idpaciente }, { $set: { ultimodoctor: body.doctor , sucursal: body.sucursal, citaproxima: body.citaprogramada, estado: body.estadopaciente } })  
    })
    .then(() => {
      console.log('guardado con exito')
      return res.json(body.idpaciente)
    })
    .catch(err => console.error(err))
}

let putCitaByPaciente = (req, res) => { 
  let { body } = req,
    { idpaciente } = req.params,
    { index } = req.params

  let cita = {
    numero: body.numero,
    tratamiento: body.tratamiento,
    descripcion: body.descripcion,
    estado: true,
    fechaprogramada: body.fechaprogramada,
    fechaejecutada: body.fechaejecutada,
    tipocita: body.tipocita,
    doctor: body.doctor,
    sucursal: body.sucursal

  }
  console.log(cita)
  Citas.findOneAndUpdate(
    { paciente: idpaciente }, { $set: { [`sesiones.${index}`]: cita } })
    .then((data) => {
      console.log(data)
      Paciente.findOneAndUpdate({ _id: idpaciente }, { $set: { ultimodoctor: body.doctor , sucursal: body.sucursal, citaproxima: body.citaprogramada, estado: body.estadopaciente } })
    })
    .catch(err => console.error(err))
}

module.exports = { putCita, putCitaByPaciente }