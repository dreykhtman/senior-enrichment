const router = require('express').Router();
const { Campus, Student } = require('../db/models');

router.get('/', function (req, res, next) {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  Campus.findById(id)
    .then(campus => res.json(campus))
    .catch(next);
});

router.get('/:id/students', function(req, res, next) {
  let id = req.params.id;
  Student.findAll({
    where: {
      campusId: id
    }
  })
    .then(students => res.json(students))
    .catch(next);
});

module.exports = router;
