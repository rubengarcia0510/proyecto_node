'use strict'

var app = require('./app');
var port = process.env.PORT || 3977;

app.listen(port, function(){
  console.log("Hola, La app escucha en el puerto "+port);
});
