'use strict';

// Require all the models
  // Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
  // This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
  // This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere

// This is also probably a good place for you to set up your associations

const Student = require('./student');
const Campus = require('./campus');

Student.belongsTo(Campus);
Campus.hasMany(Student);

// Campus.create({
//   name: 'Venus',
//   image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg'
// });

// Campus.create({
//   name: 'Neptune',
//   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/1200px-Neptune_Full.jpg'
// });

// Student.create({
//   name: 'Tony',
//   email: 'tony@mail.com',
//   campusId: 2
// })

// Student.create({
//   name: 'Toby',
//   email: 'toby@mail.com',
//   campusId: 3
// })
module.exports = {
  Student,
  Campus
};
