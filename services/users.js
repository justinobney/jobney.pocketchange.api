var r = require('rethinkdb');
var db_config = require('./dbconfig');

(function(userService) {

  userService.findByUid = function(uid) {
    return r.connect(db_config).then(function(conn) {
      return r.table('users')
        .filter({uid: uid})
        .run(conn)
        .then(handleUserExistCheck);
    });
  }

  userService.createNewUser = function(newUser) {
    return r.connect(db_config).then(function(conn){
      return r.table('users')
        .insert(newUser)
        .run(conn)
        .then(function(result){
          newUser.id = result.generated_keys[0];
          newUser.isNew = true;
          return newUser;
        });
    });
  }

  function handleUserExistCheck(cursor) {
    return cursor.toArray().then(function(users) {
      return users.length == 1 ? users[0] : null;
    })
  }


})(module.exports);
