const express = require('express');
const service = require('../controllers/service-controller');
const router = express.Router();

router.route("/services").get(service)

module.exports =  router;