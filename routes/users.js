var express = require('express');
var router = express.Router();
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, getUsersById } = require('../controllers/UserController')
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.status(200).json({
        data: 'hello world first apis'
    })
});

router.get('/users', getUsersAPI);
router.get('/users/:id', getUsersById);
router.post('/users', postCreateUserAPI);
router.put('/users', putUpdateUserAPI);
router.delete('/users', deleteUserAPI);

module.exports = router;



