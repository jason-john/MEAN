const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');


const app = express();
mongoose.connect('mongodb+srv://jason:7sDhraDXBW1bKu1e@mycluster-htwsm.mongodb.net/node-angular?retryWrites=true')
  .then(() => {
    console.log('connected to database');
  })
  .catch(() => {
    console.log('connection failed');
  })
app.use(bodyParser.json());
app.use('/images', express.static(path.join('backend/images')));

//7sDhraDXBW1bKu1e

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/api/posts',postsRoutes);
module.exports = app;
