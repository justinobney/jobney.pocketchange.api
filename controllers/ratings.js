var ratingsService = require('../services/ratings');

(function(authController) {

  authController.init = function(app) {
    app.post('/api/submitRating', handleSubmitRating);
    app.post('/api/myRatings', handleMyRating);
  }

  function handleSubmitRating(req, res) {
    ratingsService.submitRating(req.body.rating)
      .then(function(result){
        res.json(result)
      })
  }

  function handleMyRating(req, res) {
    ratingsService.getUserRatings(req.body.uid)
      .then(function(result){
        res.json(result)
      })
  }

})(module.exports);
