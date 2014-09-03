var ratingsService = require('../services/ratings');

(function(authController) {

  authController.init = function(app) {
    app.post('/api/submitRating', handleSubmitRating);
  }

  function handleSubmitRating(req, res) {
    ratingsService.submitRating(req.body.rating)
      .then(function(result){
        res.json(result)
      })
  }

})(module.exports);
