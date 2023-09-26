var express = require('express');
var router = express.Router();
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
var db = require("../database/queries") ;


router.get('/list', db.getAllDepartment);

/* GET list page. */
router.get('/list', function(req, res, next) {
  res.render('index', { title: 'Express' });
      res.sendFile(path.join(__dirname + "./views/index.html"));

});

module.exports = router;

