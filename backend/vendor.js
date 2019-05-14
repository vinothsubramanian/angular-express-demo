var express = require("express");
var Datastore = require("nedb"),
  db = new Datastore({ filename: "nedb", autoload: true });

var router = express.Router();

router.get("/fetch", function(req, res) {
  db.find({ type: "solidness" }, function(err, docs) {
    console.log(docs);
    res.send(docs);
  });
});

router.post("/update", function(req, res) {
  console.log(req.body);
  db.update({ type: "solidness" }, req.body, function(err, newDoc) {
    if (newDoc === 0) {
      db.insert(req.body, function(err, newDoc) {
        console.log(err, newDoc);
      });
    }
    // Callback is optional
    // newDoc is the newly inserted document, including its _id
    // newDoc has no key called notToBeSaved since its value was undefined
  });
  res.send("Updated Successfully");
});
module.exports = router;
