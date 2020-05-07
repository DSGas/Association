const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    topic: String,
    content: String
});

module.exports = mongoose.model('Post', postSchema);