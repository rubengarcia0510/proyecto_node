'use strict'

function buscar(req,res){
  console.log("Ingreso en el controller buscar");
  res.status(200).send(mensaje:"Controlador buscar");
}

function guardar(req,res){
  console.log("Ingreso en el controller guardar");
  res.status(200).send(mensaje:"Controlador guardar");
}

function eliminar(req,res){
  console.log("Ingreso en el controller eliminar");
  res.status(200).send(mensaje:"Controlador eliminar");
}

module.exports = {
  buscar,
  guardar,
  eliminar,
}
