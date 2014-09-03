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

  ratingsService.getUserRatings = function(uid){
    return r.connect(db_config).then(function(conn){
      return r.table('ratings')
        .filter({user: {id: uid}})
        .run(conn)
        .then(handleGetUserRatings);
    });
  }

  function handleGetUserRatings(cursor) {
    return cursor.toArray();
  }

})(module.exports);
