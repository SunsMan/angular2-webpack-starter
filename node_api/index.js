var express = require('express');
var app = express();
var coursesList = require('./coursesListGeneration');
var _ = require('lodash');
var bodyParser = require('body-parser');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.get('origin'));
  res.header('Access-Control-Allow-Headers', 'Origin');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  if('OPTIONS'== req.method) {
    res.send(200);
  } else {
    next();
  }
});

app.use((req, res, next) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});

var coursesRouter = express.Router();
app.use('/courses', coursesRouter);


coursesRouter.get('/available', (req, res, next) => {
  res.status(200).json(coursesList);
});

coursesRouter.get('/:id', (req, res) => {
  let courseItem = _find(coursesList, (item) => {
    return item.id === +req.params.id;
  });
  res.status(200).json(courseItem);
});

coursesRouter.post('/', (req, res) => {
  let newCourse = req.body;

  let maxCoursesId = _.max(coursesList.map(i => i.id));
  let courseItem = {
    id: (maxCoursesId || 0) + 1,
    name: newCourse.name,
    duration: newCourse.duration,
    description: newCourse.description,
    complexity: newCourse.complexity
  };

  coursesList.push(courseItem);
  res.statusCode(200);
});


coursesRouter.put('/:id', (req, res) => {
  let updatededCourseBody = req.body;
  let updatededCourseItem = {
    id: updatededCourseBody.id,
    name: updatededCourseBody.name,
    duration: updatededCourseBody.duration,
    description: updatededCourseBody.description,
    complexity: updatededCourseBody.complexity
  };

  let currentlyBeingUpdatedItem = _find(coursesList, (item) => item.id === +req.params.id);
  res.status(200).end();
});
