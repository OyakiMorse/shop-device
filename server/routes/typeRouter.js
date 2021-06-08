const Router = require('express')
const router = new Router()
const typeController = require('../controller/typeController')
const chekcRole = require('../middleware/checkRoleMiddleware')

router.post('/', chekcRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)


module.exports = router