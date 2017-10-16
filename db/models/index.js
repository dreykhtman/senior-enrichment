'use strict';

// Require all the models
  // Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
  // This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
  // This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere

// This is also probably a good place for you to set up your associations

const Student = require('./student');
const Campus = require('./campus');

Student.belongsTo(Campus, {as: 'residence'});

// Campus.create({
//   name: 'Moon',
//   image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg'
// });

// Campus.create({
//   name: 'Uranus',
//   image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg'
// });

module.exports = {
  Student,
  Campus
};
