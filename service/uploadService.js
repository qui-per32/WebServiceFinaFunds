const Multer = require('multer');
const path = require('path');

class uploadService {
    constructor() {
        this.storage = Multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, "public/files");
            },
            filename: (req, file, cb) => {
                let Name = file.originalname
                cb(null, Name );
            },
        });
    }

    up() {
        let storage = this.storage;
        let upload = Multer({
           storage: storage,
           fileFilter: function (req, file, cb) {
               var ext = path.extname(file.originalname);
               if (ext !== '.csv') {
                   return cb(console.error('Only csv are allowed'))
               }
               return cb(null, true)
           }
            
        });
        return upload;
    }

};

module.exports = uploadService;