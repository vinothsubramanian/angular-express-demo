var express = require('express');

var app = express();
const apis = require("./index");

app.use(
  '/api/**',
  apis
);
app.listen(3000);