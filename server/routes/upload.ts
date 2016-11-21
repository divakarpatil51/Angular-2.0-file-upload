import { Router, Response, Request } from 'express';
import * as  multer from 'multer';
// let multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        //console.log('data filename', file);
        cb(null, file.originalname);
    }
});
let upload = multer({ storage: storage });
const uploadRouter: Router = Router();

uploadRouter.post('/uploadVideo', upload.single('uploads'), (request: Request, response: Response) => {
    console.log('data filename', request.file.destination);
    response.send(request.file);
    // response.sendFile
});

export { uploadRouter }