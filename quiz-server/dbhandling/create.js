var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function createInputs() {
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("arnold");
    var myobj1 = [
      {question: 'Which one of these is Arnold Schwarzenegger’s breakthrough film?', correct: 'Conan the Barbarian', options: ['Conan The Destroyer', 'The Terminator', 'Red Sonya', 'Conan the Barbarian'], level: 1},
      {question: 'From which film is the catchphrase “I’ll be back” from?', correct: 'The Terminator', options: ['The Terminator', 'Twins', 'Junior', 'Commando'], level: 1},
      {question:'In which year was Schwarzenegger elected as California’s governor?', correct:'2003', options: [2010, 1990, 2003, 2015], level: 1}
    ];
    var myobj2 = [
        {question:'In which fictional movie does Arnold have a dual role playing both himself and a fictional character?', correct:'Last Action Hero', options: ['Expendables', 'Last Action Hero', 'Terminator 3: Rise of the Machines', 'Jingle All The Way'], level: 2},{question:'Which of these describes the plot of the Terminator series the best?', correct:'AI tries to eliminate all of humanity', options: ['AI helps the bees pollinate to save humanity from destruction', 'AI tries to enslave all humanity', 'AI tries to enslave all humanity', 'AI tries to eliminate all of humanity'], level: 2},{question:'How is Arnold credited in the first movie he acted in?', correct:'Arnold Strong, “Mr. Universe”', options: ['Arnold Turbo, “Mr. Universe”', 'Arnold Schwarzenegger, “Mr. Universe”', 'Arnold Strong, “Mr. Universe”', 'Archie Black, “Mr. Universe”'], level: 2}
    ]
    var myobj3 = [
        {question:'In 1991 Arnold acquired for himself a very special vehicle that cost 20 000 USD. He still owns it today. Which vehicle is it?', correct:'1951 M-47 Patton tank', options: ['Lexus LS 400', '1951 M-47 Patton tank', 'Land Rover Defender 110', 'Airplane Cessna 172'], level: 3},{question:'In the opening scene of the movie Commando Arnold’s character Matrix is shown carrying something on his shoulder. What is he carrying?', correct:'A whole piece of log', options: ['His daughter Jenny', 'Automatic rifle', 'A whole piece of log', 'A wounded enemy soldier'], level: 3},{question:'1967 Arnold won the title of Mr. Universe for the first time and became the youngest winner ever. How old was he?', correct:'20 years old', options: ['20 years old', '32 years old', '23 years old', '25 years old'], level: 3}
    ]
    var myobj4 = [
        {question:'From which of these movies is Arnold’s quote “Cocainum!” from?', correct:'Red Heat', options: ['Red Sonja', 'Red Heat', 'Eraser', 'True Lies'], level: 4},{question:'Arnold is not only an actor, bodybuilder and a politician but a businessman as well. He started his first business as early as 1968 with his fellow bodybuilder Franco Columbu. What kind of business were they running?', correct:'Bricklaying venture', options: ['Mail-order business selling instructional tapes for bodybuilding', 'Operating an independent gym in Graz, Austria', 'Bricklaying venture', 'Real estate investment agency'], level: 4},{question:'In the classic movie Predator, Arnold plays an army veteran Alan “Ducth” Schaefer, who is hired to lead a special mission into the jungle. Which military rank does Dutch hold?', correct:'Major', options: ['Major', 'Second Lieutenant', 'Lieutenant Colonel', 'Sergeant First Class'], level: 4}
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