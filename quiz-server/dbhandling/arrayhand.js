var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function countDocs() {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("arnold");
        let coll = dbo.collection('hallOfFame');
        coll.count().then((count) => {
            console.log(count)
        })
        db.close();
    })
}

function doArray() {
    items=[];
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("arnold");
        dbo.collection("hallOfFame").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          items.push(result);
          db.close();
        });
      });
      return result
    }

const sortArray = (arr, key) => {
        return arr.sort((a, b) => {
            return a[key] - b[key];
        });
    };

module.exports = {sortArray}, {doArray}, {countDocs}

