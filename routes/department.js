var express = require('express');
var router = express.Router();

var db = require("../database/queries") ;

/* GET all department listing. */
router.get('/list', db.getAllDepartment);

module.exports = router;
