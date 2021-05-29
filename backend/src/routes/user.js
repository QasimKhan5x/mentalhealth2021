const express = require('express');
const router = express.Router();


const user = require('@controllers/user.js');



router.get('/api/users/:id', user.getUserById);

router.get('/api/users', user.getUsers);

router.post('/api/users', user.newUser);

router.delete('/api/users/:id', user.deleteUser);

router.patch('/api/users/:id', user.updateUser);


module.exports = router;