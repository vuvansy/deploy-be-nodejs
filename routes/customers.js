var express = require('express');
var router = express.Router();

const { postCreateCustomer, postCreateArrayCustomer, 
    getAllCustomers, putUpdateCustomers, deleteACustomer} = require('../controllers/customerController');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.status(200).json({
        data: 'hello world first apis Customer'
    })
});



router.post('/customers', postCreateCustomer);
router.post('/customers-many', postCreateArrayCustomer);
router.get('/customers', getAllCustomers);
router.put('/customers', putUpdateCustomers);
router.delete('/customers', deleteACustomer);

module.exports = router;