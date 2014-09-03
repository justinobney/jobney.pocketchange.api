(function(controllers){
    var authController = require('./auth');
    var ratingsController = require('./ratings');

    controllers.init = function(app){
        authController.init(app);
        ratingsController.init(app);

        app.get('/', function(req,res){res.json({data:'hi'})});
    }

})(module.exports);
