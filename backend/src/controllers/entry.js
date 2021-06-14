const Entry = require('../models/entry')

module.exports = {
    async getEntryById(req, res) {
        try {
            const _id = req.params.id;
            const entries = await Entry.findById({_id});
            if (!entries)
                res.status(404).send("No entries");
            else
                res.status(200).send(entries);
        } catch (e) {
            res.status(500).send(e);
        }
    },
    async getEntries(req, res) {
        try {
            const userId = req.query.userId;
            let entries = {};
            if (!userId)
                entries = await Entry.find();
            else
                entries = await Entry.find({userId});
            if (Object.keys(entries).length === 0) {
                return res.status(404).send(entries);
            }
            res.status(200).send(entries);
        } catch (e) {
            res.status(404).send(e);
        }
    },
    async newEntry(req, res) {
        try {
            const entry = new Entry(req.body);
            const entryCreated = await entry.save();
            res.status(201).send(entryCreated); 
        } catch (e) {
            res.status(400).send(e);
        }
    },
    async deleteEntry(req, res) {
        try {
            const _id = req.params.id;
            if (!_id)
                return res.status(400).send();
            const deleted = await Entry.findByIdAndDelete(_id);
            res.status(200).send(deleted);
        } catch (e) {
            res.status(500).send(e);
        }
    },
    async updateEntry(req, res) {
        try {
            const _id = req.params.id;
            const updatedEntries = await Entry.findByIdAndUpdate(_id, req.body, {
                new: true
            });
            res.status(200).send(updatedEntries);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}