var express = require('express');
var router = express.Router();
const HomeController = require('../controllers/homeController');
const UploadService = require('../service/uploadService');
const InsertController = require('../controllers/insertController');
let uploadService = new UploadService();
let upload = uploadService.up();
// var mongoose = require('mongoose');

// var Finametrix = mongoose.model('finametrix');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/finametrix');
// var model = require('../models/userModel');

/* GET home page. */
router.get('/', function (req, res, next) {
    let homeController = new HomeController(req, res, next);
    homeController.index();
});

router.post('/upload', upload.single('file'), function (req, res, next) {

      let homeController = new HomeController(req, res, next);
      homeController.upload();
});

router.post('/insert', function (req, res, next) {

  let insertController = new InsertController(req, res, next);
  insertController.insert()
  .then((data)=>{
      insertController.index(data);
  })
});


module.exports = router;
