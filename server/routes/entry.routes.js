const EntrySchema = require('../controllers/entry.mongoose')

module.exports = app => {
    app.get('/api/entries', EntrySchema.findAllEntries)
    app.post('api/entries', EntrySchema.createEntry)
}