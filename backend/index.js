var express = require('express');
var proxy = require('http-proxy-middleware');

var router = express.Router();

router.use(
  '/',
  proxy({ target: 'https://jsonplaceholder.typicode.com',
  pathRewrite: {
    '^/api/': '/' // remove base path
  }, changeOrigin: true })
);

module.exports = router