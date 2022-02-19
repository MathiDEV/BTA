const express = require('express')
const router = express.Router()
const actionCtrl = require('../controllers/actions')

router.post('/add', actionCtrl.add)
router.get('/', actionCtrl.getAllActions)
router.get('/automations', actionCtrl.getAllAutomation)
router.get('/xml', actionCtrl.getXml)
router.put('/trigger_up', actionCtrl.trigger_up)
router.put('/trigger_down', actionCtrl.trigger_down)

module.exports = router;  
