(function(controllers){
    var authController = require('./auth');

    controllers.init = function(app){
        app.get('/', function(req,res){res.json({data:'hi'})});
        authController.init(app);
    }

})(module.exports);
