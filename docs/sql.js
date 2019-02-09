const sqlite3 = require('sqlite3').verbose();
const path = './db/frsp.db';

let db = new sqlite3.Database(path, (err) => {
    if(err) 
    {
        return Console.Log(err.message);
    }
    console.log('Connected to the SQLite database');
  });

db.serialize(() => 
{
    db.
})

db.close((err) => {
  if(err) {
    return console.log();
  }
  console.log('Close the database connection.');
});
