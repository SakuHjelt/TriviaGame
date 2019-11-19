var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function createInputs() {
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("arnold");
    var myobj1 = [
      {question: 'Which one of these is Arnold Schwarzenegger’s breakthrough film?', correct: 'Conan the Barbarian', wrong1: 'Conan The Destroyer', wrong2: 'The Terminator', wrong3: 'Red Sonya', level: 1},
      {question: 'From which film is the catchphrase “I’ll be back” from?', correct: 'The Terminator', wrong1: 'Commando', wrong2: 'Twins', wrong3: 'Junior', level: 1},
      {question:'In which year was Schwarzenegger elected as California’s governor?', correct:'2003', wrong1:'2010', wrong2:'1990', wrong3:'2015', level: 1}
    ];
    var myobj2 = [
        {question:'In which fictional movie does Arnold have a dual role playing both himself and a fictional character?', correct:'Last Action Hero', wrong1:'Expendables', wrong2:'Jingle All The Way', wrong3:'Terminator 3: Rise of the Machines', level: 2},{question:'Which of these describes the plot of the Terminator series the best?', correct:'AI tries to eliminate all of humanity', wrong1:'AI helps the bees pollinate to save humanity from destruction', wrong2:'AI tries to enslave all humanity', wrong3:'AI tries to enslave all humanity', level: 2},{question:'How is Arnold credited in the first movie he acted in?', correct:'Arnold Strong, “Mr. Universe”', wrong1:'Arnold Turbo, “Mr. Universe”', wrong2:'Arnold Schwarzenegger, “Mr. Universe”', wrong3:'Archie Black, “Mr. Universe”', level: 2}
    ]
    var myobj3 = [
        {question:'In 1991 Arnold acquired for himself a very special vehicle that cost 20 000 USD. He still owns it today. Which vehicle is it?', correct:'1951 M-47 Patton tank', wrong1:'Lexus LS 400', wrong2:'Airplane Cessna 172', wrong3:'Land Rover Defender 110', level: 3},{question:'In the opening scene of the movie Commando Arnold’s character Matrix is shown carrying something on his shoulder. What is he carrying?', correct:'A whole piece of log', wrong1:'His daughter Jenny', wrong2:'Automatic rifle', wrong3:'A wounded enemy soldier', level: 3},{question:'1967 Arnold won the title of Mr. Universe for the first time and became the youngest winner ever. How old was he?', correct:'20 years old', wrong1:'25 years old', wrong2:'32 years old', wrong3:'23 years old', level: 3}
    ]
    var myobj4 = [
        {question:'From which of these movies is Arnold’s quote “Cocainum!” from?', correct:'Red Heat', wrong1:'Red Sonja', wrong2:'True Lies', wrong3:'Eraser', level: 4},{question:'Arnold is not only an actor, bodybuilder and a politician but a businessman as well. He started his first business as early as 1968 with his fellow bodybuilder Franco Columbu. What kind of business were they running?', correct:'Bricklaying venture', wrong1:'Mail-order business selling instructional tapes for bodybuilding', wrong2:'Operating an independent gym in Graz, Austria', wrong3:'Real estate investment agency', level: 4},{question:'In the classic movie Predator, Arnold plays an army veteran Alan “Ducth” Schaefer, who is hired to lead a special mission into the jungle. Which military rank does Dutch hold?', correct:'Major', wrong1:'Sergeant First Class', wrong2:'Second Lieutenant', wrong3:'Lieutenant Colonel', level: 4}
    ]
    dbo.collection("levelOne").insertMany(myobj1, function(err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
    });
    dbo.collection("levelTwo").insertMany(myobj2, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
      });
    dbo.collection("levelThree").insertMany(myobj3, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
      });
    dbo.collection("levelFour").insertMany(myobj4, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
      });
    dbo.createCollection("hallOfFame", function(err, res) {
        if (err) throw err;
        console.log("Also added hallOfFame");
        db.close();
    });
  });
}

module.exports = {createInputs};