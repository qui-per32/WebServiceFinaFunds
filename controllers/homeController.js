const Controller = require('./controller'); 


class homeController extends Controller{
    constructor(req, res, next) 
        {
            super(req, res, next) 
        }

        upload(){
            this.res.redirect('/')
        }

        index() {
            this.res.render('index', {title: 'Finametrix' 
            }); 
        }

    } 
    module.exports = homeController;