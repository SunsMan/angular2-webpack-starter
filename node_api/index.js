var express = require('express');
var app = express();
var coursesList = require('./coursesListGeneration');
var _ = require('lodash');
var bodyParser = require('body-parser');

app.use
