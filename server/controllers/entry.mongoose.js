const Entry = require('../models/entry.model');

module.exports = {
    createEntry: (req,res) => {
        Entry.create(req.body) 
        .then((newEntry) => {
            res.json({newEntry})
            console.log(newEntry)
        })
        .catch((err) => console.log(err))
    },
    findAllEntries: (req,res => {
        Entry.find()
        .then((allEntries) => {
            console.log(allEntries),
            res.json(allEntries)
        })
    })
}