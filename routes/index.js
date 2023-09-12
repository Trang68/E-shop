var express = require('express');
var router = express.Router();
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
var db = require("../database/queries") ;


router.get('/list', db.getAllDepartment);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
// GET page list all department
router.get('/listdepartment', function (req, res, next) {
    res.render('listalldepartment', { title: 'Express' });
});

module.exports = router;

