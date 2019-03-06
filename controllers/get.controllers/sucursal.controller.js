const Sucursal = require('../../models/sucursal.model')

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

module.exports = { getSucursales }