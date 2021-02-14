const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./router/routes');
const model = require('./model-schema/model');
require('dotenv/config');

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('app running...'))

// connect to mongdb atlas
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => console.log('connected to db'))
.catch((err) => console.log(err))


// static middleware
app.use(express.static('public'))


// ejs
app.set('view engine', 'ejs')

// body parser
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

// router
app.use(router)