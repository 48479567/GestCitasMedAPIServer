// const Paciente = require('../../models/paciente.model'),
//   Citas = require('../../models/citas.model')

// let postPaciente = (req, res) => { 
//   let body = req.body
//   Citas.insert(body.paciente)
//     .then(data => {
//       return res(data)
//     })
//     .catch(err => {
//       return res.status(500).json({
//         ok: false,
//         err
//       })
//     })
// }

// module.exports = { postPaciente }
