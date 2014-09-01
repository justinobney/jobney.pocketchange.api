var util = require('util'),
    http = require('http'),
    express = require('express'),
    app = express();

var port = 8000;

var middleware = require('./middleware');
middleware.enableCors(app);
middleware.enableLogger(app);
middleware.useBodyParse(app);

var services = require('./services');
services.init();

var controllers = require('./controllers');
controllers.init(app);

var server = http.createServer(app);

server.listen(port, function(){
    console.log(util.format('listening on port: %s', port));
});
