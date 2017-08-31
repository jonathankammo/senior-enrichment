'use strict'
const campusRouter = require('express').Router();
const { Campus, User } = require('../db/models');

// GET /api/campuses (all campuses)
campusRouter.get('/', function (req, res, next) {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
})

// GET /api/campuses/:campusId (one campus)
campusRouter.get('/:campusId', function (req, res, next) {
  Campus.findById(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next);
});

// POST /api/campuses (create a new campus)
campusRouter.post('/', function (req, res, next) {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});

// PUT /api/campuses/:campusId (update information for one campus)
campusRouter.put('/:campusId', function (req, res, next) {
  const campusId = req.params.campusId;

  Campus.findById(campusId)
    .then(campus => campus.update(req.body))
    .catch(next);
});

// DELETE /api/campuses/:campusId (delete one campus)
campusRouter.delete('/:campusId', function (req, res, next) {
  const campusId = req.params.campusId;

  Campus.destroy({
    where: {
      id: campusId
    }
  })
    .then(() => res.status(204).end())
    .catch(next);
});


module.exports = campusRouter;
