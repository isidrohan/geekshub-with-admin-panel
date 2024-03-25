const express = require('express')
const router  = express.Router()
const user = require('../controllers/admin-controller')
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleware = require('../middleware/admin-middleware')


router.route('/users').get(authMiddleware,adminMiddleware ,user.getAllUsers);
router.route('/user/delete/:id').delete(authMiddleware,adminMiddleware,user.deleteUserById)
router.route('/user/:id').get(authMiddleware,adminMiddleware,user.getUserById);
router.route('/user/update/:id').patch(authMiddleware,adminMiddleware,user.updateUserById);

router.route('/services').get(authMiddleware,user.allServices);

router.route('/contacts').get(authMiddleware,adminMiddleware,user.allContacts);
router.route('/contacts/delete/:id').delete(authMiddleware,adminMiddleware,user.deleteContactById)

module.exports = router;