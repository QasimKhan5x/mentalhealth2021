const express = require('express');
const router = express.Router();


const user = require('@controllers/user.js');

router.get('/api/users', user.getUser);
router.get('/api/users/:id', user.getUserById);

router.post('/api/users', user.newUser);

router.delete('/api/users/:id', user.deleteUser);
router.delete('/api/users/', user.deleteUserByEmail);

router.patch('/api/users/:id', user.updateUser);
router.patch('/api/users/', user.updateUserByEmail);


module.exports = router;