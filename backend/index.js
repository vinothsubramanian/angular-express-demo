var express = require("express");
var proxy = require("http-proxy-middleware");

var router = express.Router();
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

const vendorApis = require("./vendor");
//Proxy Jira requests
router.use(
  "/",
  proxy("/api/jira/", {
    target: "https://jsonplaceholder.typicode.com",
    pathRewrite: {
      "^/api/jira/": "/" // remove base path
    },
    changeOrigin: true
  })
);

router.use("/vendor", vendorApis);

module.exports = router;
