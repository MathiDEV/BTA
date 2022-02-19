const express = require('express')
const router = express.Router()
const authCtrl = require('../controllers/auth')

router.post('/register', authCtrl.register)
router.get('/', authCtrl.getAllCodes)
router.get('/connect', authCtrl.connect)

module.exports = router;  