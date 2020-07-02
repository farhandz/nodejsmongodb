const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory)


module.exports = router