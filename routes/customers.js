var express = require('express');
var router = express.Router();

const { postCreateCustomer } = require('../controllers/customerController');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.status(200).json({
        data: 'hello world first apis Customer'
    })
});



router.post('/customers', postCreateCustomer);

module.exports = router;