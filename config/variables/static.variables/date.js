let hoy = Date.now();
const indicadorSegundo = 1000;
const indicadorMinuto = 60000;
const indicadorHora = 3600000;
const indicadorDia = 86400000;

let calculoFecha = (fecha, indicadorFecha) => {
  return fecha / indicadorFecha
}


module.exports = { 
  hoy,
  indicadorSegundo,
  indicadorMinuto,
  indicadorHora,
  indicadorDia,
  calculoFecha,

}