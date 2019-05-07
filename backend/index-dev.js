var express = require('express');

var app = express();
const apis = require("./index");
const apiPort = 3000;

app.use(
  '/api/**',
  apis
);
app.listen(apiPort);
console.log(`Api is listening in port: ${apiPort}`);