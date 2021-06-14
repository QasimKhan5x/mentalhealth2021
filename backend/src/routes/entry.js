const express = require('express');
const router = express.Router();

const entry = require('@controllers/entry.js');

router.get('/api/entries/:id', entry.getEntryById);

router.get('/api/entries', entry.getEntries);

router.post('/api/entries', entry.newEntry);

router.delete('/api/entries/:id', entry.deleteEntry);

router.patch('/api/entries/:id', entry.updateEntry);

module.exports = router;