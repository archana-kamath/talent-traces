require('dotenv').config();
const express = require('express')
const aws = require('aws-sdk');
const fs = require('fs');
var path = require('path');
var conUtils = require('./connection.js')

var apply = require('./routes/applyToJob')
var userInfo = require('./routes/userInfo')
var addJobInfo = require('./routes/addJob')
var viewJobInfo = require('./routes/viewJob')
var uploadResume = require('./routes/uploadResume')
var fetchUser = require('./routes/fetchUser')

const cors = require('cors');

const app = express();
app.use(express.json());

const reactAppPath = path.join(__dirname, '/frontend/build');
app.use(express.static(reactAppPath));
app.set('views', path.join(__dirname, 'views'));

const serveReact = (req, res) => {
  res.sendFile(path.join(reactAppPath, 'index.html'));
}

app.get('/applyToJob', serveReact);
app.get('/userInfo', serveReact);
app.get('/addJob', serveReact);
app.get('/viewJob', serveReact);
app.get('/uploadResume', serveReact);
app.get('/fetchUser', serveReact);
app.get('/*', serveReact);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



  // CORS Headers => Required for cross-origin/ cross-server communication
  // app.use((req, res, next) => {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader('Access-Control-Allow-Headers',
  //                 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  //   res.setHeader('Access-Control-Allow-Methods',
  //                 'GET, POST, PATCH, DELETE, OPTIONS');
  //   res.setHeader('Access-Control-Allow-Credentials', true);
  //   next();
  // });

  app.use(cors({ origin: '*'}));
  app.use('/', apply);
  app.use('/', userInfo);
  app.use('/', uploadResume);
  app.use('/', addJobInfo);
  app.use('/', viewJobInfo);
  app.use('/', fetchUser);

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

module.exports = app;