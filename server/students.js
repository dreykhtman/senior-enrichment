const router = require('express').Router();
const { Student } = require('../db/models');
const { Campus } = require('../db/models');

router.get('/', function (req, res, next) {
  Student.findAll({
    include: [{ model: Campus }]
  })
    .then(students => res.json(students))
    .catch(next);
});

router.post('/', function (req, res, next) {
  Student.create({
    name: req.body.name,
    email: req.body.email,
    campusId: req.body.campusId
  })
    .then(student => res.status(201).json(student))
    .catch(next);
});

// the original request. uncomment if something's broken
// router.get('/:id', function (req, res, next) {
//   let id = req.params.id;
//   Student.findById(id)
//     .then(student => res.json(student))
//     .catch(next);
//     // add Campus info to Sudent?
//     // include: [{model: Campus}]
// });

router.get('/:id', function (req, res, next) {
  let id = req.params.id;
  Student.findOne({
    include: [
      { model: Campus }
    ],
    where: {
      id
    }
  })
    .then(student => res.json(student))
    .catch(next);
  // add Campus info to Sudent?
  // include: [{model: Campus}]
});

router.put('/:id', function (req, res, next) {
  let id = req.params.id;
  Student.findById(id)
    .then(student => student.update({
      name: req.body.name,
      email: req.body.email,
      campusId: req.body.campusId
    }))
    .then(student => res.json(student))
    .catch(next);
});

router.delete('/:id', function (req, res, next) {
  let id = req.params.id;
  Student.findById(id)
    .then(student => student.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
