const express = require('express');
const router = express.Router();

const entry = require('@controllers/entry.js');

router.get('/api/entries/:id', entry.getEntryById);

router.get('/api/entries', entry.getEntries);

router.get('/api/entries/:userId', entry.getEntriesByUserId);

router.get('/api/entries/:email', entry.getEntriesByEmail);

router.post('/api/entries', entry.newEntry);

router.delete('/entries/:id', entry.deleteEntry);

router.patch('/api/entries/:id', entry.updateEntry);


module.exports = router;