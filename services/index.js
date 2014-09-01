var r = require('rethinkdb');

(function(services){

  var connection = null;
  var DB_NAME = 'burger_crawl';
  var TABLES = ['users', 'groups', 'locations', 'reviews'];

  services.init = function(){
    r.connect( {host: 'localhost', port: 28015}, setConnection);
  }

  function setConnection(err, conn) {
      if (err) throw err;
      
      connection = conn;
      
      listDatabases()
        .then(ensureDatabase)
        .then(listTables)
        .then(ensureTables)
        .then(closeConnection);
  }

  function closeConnection(){
    connection.close(function(err) { if (err) throw err; })
  }

  function listDatabases(){
    return r.dbList().run(connection);
  }

  function listTables(){
    return r.db(DB_NAME).tableList().run(connection);
  }

  function ensureDatabase(databaseNames){
    if(databaseNames.indexOf(DB_NAME) < 0){
      r.dbCreate(DB_NAME).run(connection);
    }
  }

  function ensureTables(tableNames){
    TABLES.forEach(function(table){
      if(tableNames.indexOf(table) < 0){
        r.db(DB_NAME).tableCreate(table).run(connection);
      }
    })
  }

})(module.exports);
