var express = require('express');
var router = express.Router();

const { postCreateCustomer, postCreateArrayCustomer, 
    getAllCustomers, putUpdateCustomers, deleteACustomer, deleteArrayCustomer} = require('../controllers/customerController');

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
router.delete('/customers-many', deleteArrayCustomer);

router.get('/info', (req, res) => {
    console.log(">> check query; ", req.query)
    return res.status(200).json({
        data: req.query
    })
});


router.get('/info/:name/:adress', (req, res) => {
    console.log(">> check params; ", req.params)
    return res.status(200).json({
        data: req.params
    })
});


module.exports = router;