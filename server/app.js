'use strict'

var express = require('express');
var app = express();

var productos_router = require('./routers/productos');
api.use('/api/productos',productos_router);



module.exports = app;
