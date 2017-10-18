const router = require('express').Router();
const { Student } = require('../db/models');

router.get('/', function (req, res, next) {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  Student.findById(id)
    .then(student => res.json(student))
    .catch(next);
});

module.exports = router;
