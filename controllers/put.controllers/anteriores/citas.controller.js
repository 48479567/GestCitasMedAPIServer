const Citas = require('../../models/citas.model')

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

module.exports = { putCita }