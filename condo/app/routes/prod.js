var express = require('express');
var router = express.Router();
 
module.exports = function(app){
  var Controller = app.controllers.prod;

  router.get('/', Controller.listAll);
  router.post('/', Controller.create);
  router.delete('/:name', Controller.remove);

  app.use('/prod', router);

}