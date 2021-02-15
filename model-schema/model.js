const mongoose = require('mongoose')
// const blogSchema = mongoose.Schema;
// const moment = require('moment')

// schema
const blog = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    snippet: {
      type: String,
      required: true
    },

    message: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

// model
const blogModel = mongoose.model('Blog', blog)

module.exports = blogModel
