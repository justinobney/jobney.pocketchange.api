(function(authController){

    authController.init = function(app){
        app.post('/api/authenticate', handleAuthRequest);
    }

    function handleAuthRequest(req, res){
        if(req.body.username === 'justin' && req.body.password === 'password'){
          res.json({success: true, token: new Date().getTime()})
        } else {
          res.json({success: false, body: req.body})
        }
    }

})(module.exports);
