var coursesList = [];
var decsriptions = [
  'This course will be so usefull that you cant finish it!',
  'We don’t need no education about the rock gods Pink Floyd',
  'Calais requires more, not less co-operation',
  'When history is worth as much as human life itself',
  "We can build affordable homes - if there's the political will to do it",
  'Commuters will soon be able to see our rail renaissance',
  'We might be leaving the EU but we’re part of Europe',
  'There are easy ways to solve the gender pay gap',
  'London Bridge station is being transformed'
]
var names = [
  'Angular',
  'React',
  'Ember',
  'Underscore',
  "RX",
  'Angular2',
  'd3js',
  'Cytoscapejs',
  'Backbone'
]
for (var i = 0; i < 5; i++) {
  var generatedItem = generateNewCourse(i);
  generatedItem.id = i;
  coursesList.push(generatedItem);
}

function generateNewCourse(num) {
  return {
    name: getRandomName(getRandomInt(i, 9)),
    duration: getRandomInt(i, 12),
    description: getRandomDescription(getRandomInt(i, 9)),
    complexity: Math.random()
  }
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomDescription(num) {
  return decsriptions[num];
}
function getRandomName(num) {
  return names[num];
}

module.exports = coursesList;
