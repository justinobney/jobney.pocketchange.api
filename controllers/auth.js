var userService = require('../services/users');

(function(authController) {

  authController.init = function(app) {
    app.post('/api/authenticate', handleAuthRequest);
  }

  function handleAuthRequest(req, res) {
    userService.findByUid(req.body.uid)
      .then(function(user){
        res.json(user)
      })

  }


})(module.exports);
