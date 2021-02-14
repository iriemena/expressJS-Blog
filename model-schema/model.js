const mongoose = require('mongoose');
// const blogSchema = mongoose.Schema;

// schema
const blog = mongoose.Schema({
    title:{
        type: String,
        required: true
    },

    snippet:{
        type: String,
        required: true
    },

    message:{
        type: String,
        required: true
    },

    date:{
        type: String,
        default: Date.now
    },
}, {timestamps: true})

// model
const blogModel = mongoose.model('Blog', blog);

module.exports = blogModel