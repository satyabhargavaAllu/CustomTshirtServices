var express = require('express');
var designRouter = express.Router();
var designService = require('../services/designsService');

designRouter.route('/all')
    .get((req, res) => {
        designService.getAllDesigns().then((data) => {
            res.send(data);
        });
    });

designRouter.route('/save')
    .post((req, res) => {
        designService.createOrUpdate(req.body).then((data)=>{
            res.send(data);
        });
    });


designRouter.route('/:id')
    .get((req, res) => {
        let designId = req.params.id;
        designService.findById(designId).then((data) => {
            res.send(data);
        });
    });

module.exports = designRouter;
