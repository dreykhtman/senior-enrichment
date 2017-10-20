'use strict';
const api = require('express').Router();

api.use('/campuses', require('./campuses'));
api.use('/students', require('./students'));

module.exports = api;
