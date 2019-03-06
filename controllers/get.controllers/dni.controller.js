const axios = require('axios')

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

module.exports = { getDNI }