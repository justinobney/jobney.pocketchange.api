var r = require('rethinkdb');
var db_config = require('./dbconfig');

(function(ratingsService) {

  ratingsService.submitRating = function(rating) {
    return r.connect(db_config).then(function(conn){
      return r.table('ratings')
        .insert(rating)
        .run(conn);
    });
  }

})(module.exports);
