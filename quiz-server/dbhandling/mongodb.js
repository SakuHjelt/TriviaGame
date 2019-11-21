const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/arnold';
const crmongo = require('./create');
const arrmongo = require('./arrayhand')

/*MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('Virhe!' + err.message);
    }
    console.log('Moi');
    db.close();
})*/

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    if (err) throw err;
    var dbo = client.db("arnold");
    dbo.listCollections().toArray(function(err, items){
      if (err) throw err;
      if (items.length == 0) {
          crmongo.createInputs() }
          else {
              console.log("Collection already exists, no changes made")
          }
    }); 
  });

function getQuestions(callback) {
itemList = []
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("arnold");
    dbo.collection("levelOne").aggregate([{$sample:{size: 3}}]).toArray(function(err, result) {
        if (err) throw err;
        result.map(item => {
            itemList.push(item);
        })
    });
    dbo.collection("levelTwo").aggregate([{$sample:{size: 2}}]).toArray(function(err, result) {
        if (err) throw err;
        result.map(item => {
            itemList.push(item);
        })
    });
    dbo.collection("levelThree").aggregate([{$sample:{size: 3}}]).toArray(function(err, result) {
        if (err) throw err;
        result.map(item => {
            itemList.push(item);
        })
    });
    dbo.collection("levelFour").aggregate([{$sample:{size: 3}}]).toArray(function(err, result) {
      if (err) throw err;
      result.map(item => {
          itemList.push(item);
      })
      db.close();
      callback(itemList)
    });
  });
}

function createNick(req, callback) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("arnold");
      var myobj = req.body;
      let coll = dbo.collection('hallOfFame');
      let number = coll.countDocuments()
      console.log(number)
      dbo.collection("hallOfFame").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("Nick added to the list");
        db.close();
        callback('Hall of fame updated')
      });
    });
  }

/*  function createNick2(req, callback) {
  //const moi = arrmongo.countDocs();
  console.log(moi)
  //if (arrmongo.countDocs() <= 10) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("arnold");
      var myobj = req.body;
      dbo.collection("hallOfFame").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("Nick added to the list");
        db.close();
        callback('Hall of fame updated')
      });
    });
  /*} else {
  const itemlist = arrmongo.doArray();
  const newlist = arrmongo.sortArrayOfObjects(itemlist, "score");

  for (let i=0; i<newlist.length; i++) {
    if (req.body.score > newlist[i].score) {
      newlist.pop();
      newlist.push(req.body);
    } 
  }

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("arnold");
    var myobj = newlist;
    dbo.collection("levelOne").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  });
}+
}*/








  module.exports = {getQuestions, createNick};