var bodyParser = require('body-parser');

(function(middleware) {
    
    middleware.enableLogger = function(app){
        var logfmt = require("logfmt");
        app.use(logfmt.requestLogger());
    };
    
    middleware.enableCors = function(app){
        app.all('*', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            next();
        });
    }

    middleware.useBodyParse = function(app){
      // parse application/x-www-form-urlencoded
      app.use(bodyParser.urlencoded({ extended: false }))

      // parse application/json
      app.use(bodyParser.json())
    }

})(module.exports);
