const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(':memory:', (err) => {
  if(err) {
    return Console.Log(err.message);
  }
  console.log('Connected to the in-memory SQlite database');
});

// do everything here

db.close((err) => {
  if(err) {
    return console.log();
  }
  console.log('CLose the database connection.');
});
