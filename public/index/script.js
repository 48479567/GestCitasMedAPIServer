

function cambiarPassword() {
  let dni = document.getElementById("dni").value;
  return document.getElementById("psw").value = dni;
}

function cambiarDoctoresLink() {
  let sucursalId = document.getElementById("sucursal");
  let valueSucursalId = sucursalId.value;
  let doctoresLink = document.getElementById('doctoreslink');
  doctoresLink.href = `/api/doctores/${valueSucursalId}`;
  doctoresLink.innerText = `Ir a ${sucursalId.selectedOptions[0].innerText}`;
}