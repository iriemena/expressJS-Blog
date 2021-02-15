// controller
const blogModel = require('../model-schema/model.js')
// const moment = require('moment')

// post request
const post = (req, res) => {
  const post = new blogModel(req.body)
  post
    .save()
    .then(result => {
      res.redirect('/')
    })
    .catch(err => {
      res.send(err)
    })
}

// home page (all blogs)
const index = (req, res) => {
  blogModel
    .find()
    .sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { title: 'All-blogs', blogs: result })
    })
    .catch(err => {
      res.status(500).send('Problem connecting to the server, try again later')
    })
}

// about
const about = (req, res) => {
  res.render('about', { title: 'About' })
}

// contact
const contact = (req, res) => {
  res.render('contact', { title: 'Contact' })
}

// add a new blog
const add = (req, res) => {
  res.render('add', { title: 'Add-blog' })
}

// find single blog
const details = (req, res) => {
  const id = req.params.id
  blogModel
    .findById(id)
    .then(result => {
      res.render('details', { blog: result, title: 'Blog-details' })
    })
    .catch(err => {
      res.status(404).render('404', { title: 'error' })
    })
}

// delete
const delete_blog = (req, res) => {
  const id = req.params.id
  blogModel
    .findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/' })
    })
    .catch(err => {
      res.send(err)
    })
}

module.exports = {
  post,
  index,
  about,
  contact,
  add,
  details,
  delete_blog
}
