var r = require('rethinkdb');

var db_config = {
  db: "burger_crawl",
  host: 'localhost',
  port: 28015
};

(function(userService) {

  userService.findByUid = function(uid) {
    return r.connect(db_config).then(function(conn) {
      return r.table('users')
        .filter({uid: uid})
        .run(conn)
        .then(handleUserExistCheck);
    });
  }

  function handleUserExistCheck(cursor) {
    return cursor.toArray().then(function(users) {
      return users.length == 1 ? users[0] : {};
    })
  }


})(module.exports);
