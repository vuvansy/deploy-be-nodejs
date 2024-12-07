var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    "statusCode": 200,
    "message": "Fetch HomePage",
    "data": {
      "author": "DATN Books",
      "data": "Hello World",
     
    },
    "author": "Vũ Văn Sỹ"
  });
});

module.exports = router;
