var userService = require('../services/users');

(function(authController) {

  authController.init = function(app) {
    app.post('/api/authenticate', handleAuthRequest);
  }

  function handleAuthRequest(req, res) {
    userService.findByUid(req.body.uid)
      .then(function(user){
        if(user)
          res.json(user)
        else
          createNewUser(req, res);
      })
  }

  function createNewUser(req, res){
    var newUser = {
      uid: req.body.uid,
      displayName: req.body.displayName,
      email: req.body.email
    }

    userService.createNewUser(newUser)
      .then(function(user){
        if(user)
          res.json(user);
        else
          res.status(500).send(user);
      })
  }


})(module.exports);
