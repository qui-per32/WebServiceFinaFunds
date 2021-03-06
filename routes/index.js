var express = require('express');
var router = express.Router();
const HomeController = require('../controllers/homeController');
const UploadService = require('../service/uploadService');
const InsertController = require('../controllers/insertController');
let CalcService = require('../service/calcService');
let uploadService = new UploadService();
let upload = uploadService.up();


/* GET home page. */
router.get('/', function (req, res, next) {
    let homeController = new HomeController(req, res, next);
    homeController.index();
});

router.post('/upload', upload.single('file'), function (req, res, next) {
    
    if (req.validationError) {
        return res.render('fileType');
    }
    let insertController = new InsertController(req, res, next);
    insertController.insert()
        .then((data) => {         
            insertController.index(data);
        })
});



module.exports = router;