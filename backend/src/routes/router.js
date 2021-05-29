const router = require('express').Router();

// Users routes
router.use(require('@routes/user'));
router.use(require('@routes/entry'));

module.exports = router;