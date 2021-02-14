const express = require('express');
const router = express.Router();
// import controller
const controller = require('../controller/controller')

// post request
router.post('/', controller.post)

// home page (all blogs)
router.get('/', controller.index) 

// about
router.get('/about', controller.about)

// contact
router.get('/contact', controller.contact)

// add new blog
router.get('/add', controller.add)

// find single blog
router.get('/:id', controller.details)

// delete
router.delete('/:id', controller.delete_blog)

module.exports = router