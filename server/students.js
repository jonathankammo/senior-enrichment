'use strict'
const studentRouter = require('express').Router();
const { Campus, User } = require('../db/models');

// GET /api/students (all students)
studentRouter.get('/', function (req, res, next) {
  User.findAll()
    .then(students => res.json(students))
    .catch(next);
})

// GET /api/students/:studentId (one student)
studentRouter.get('/:studentId', function (req, res, next) {
  User.findById(req.params.studentId)
    .then(student => res.json(student))
    .catch(next);
});

// POST /api/students (create a new student)
studentRouter.post('/', function (req, res, next) {
  User.create(req.body)
    .then(student => res.json(student))
    .catch(next);
});

// PUT /api/students/:studentId (update information for one student)
studentRouter.put('/:studentId', function (req, res, next) {
  const studentId = req.params.studentId;

  User.findById(studentId)
    .then(student => student.update(req.body))
    .catch(next);
});

// DELETE /api/students/:studentId (delete one student)
studentRouter.delete('/:studentId', function (req, res, next) {
  const studentId = req.params.studentId;

  User.destroy({
    where: {
      id: studentId
    }
  })
    .then(() => res.status(204).end())
    .catch(next);
});


module.exports = studentRouter;
