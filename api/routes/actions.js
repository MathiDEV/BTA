const express = require('express')
const router = express.Router()
const actionCtrl = require('../controllers/actions')

router.post('/add', actionCtrl.add)
router.put('/modify_base', actionCtrl.modify_base)
router.put('/modify_core', actionCtrl.modify_core)
router.delete('/delete', actionCtrl.delete)
router.post('/add', actionCtrl.add)
router.get('/', actionCtrl.getAllActions)
router.post('/automations', actionCtrl.getAllAutomation)
router.post('/automations_m', actionCtrl.getAllAutomation_m)
router.post('/xml', actionCtrl.getXml)
router.put('/trigger_up', actionCtrl.trigger_up)
router.put('/trigger_down', actionCtrl.trigger_down)

module.exports = router;
