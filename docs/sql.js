const sqlite3 = require('sqlite3').verbose();
const path = './db/frsp.db';

let db = new sqlite3.Database(path, (err) => {
    if(err) 
    {
        return Console.Log(err.message);
    }
    console.log('Connected to the SQLite database');
  });

db.parallelize(() => 
{
    db.serialize(() =>
    {
        //Create parent table
        db.run('CREATE TABLE frspScout(Team SMALLINT, Match SMALLINT, CrossedLine ENUM("Yes", "No"), StartLevel ENUM("1", "2", "3"))');
        db.run(`INSERT INTO frsp1a(Team, Match) VALUES(6498, 1);`);  
    });
});

db.close((err) => {
  if(err) {
    return console.log();
  }
  console.log('Close the database connection.');
});


function addPacket(team, match, sand);
