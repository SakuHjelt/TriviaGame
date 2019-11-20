var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function createInputs() {
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("arnold");
    var myobj1 = [
      {question: 'Which one of these is Arnold Schwarzenegger’s breakthrough film?', correct: 'Conan the Barbarian', q1: 'Conan The Destroyer', q2: 'The Terminator', q3: 'Red Sonya', q4: 'Conan the Barbarian', level: 1},
      {question: 'From which film is the catchphrase “I’ll be back” from?', correct: 'The Terminator', q1: 'The Terminator', q2: 'Twins', q3: 'Junior', q4: 'Commando', level: 1},
      {question:'In which year was Schwarzenegger elected as California’s governor?', correct:'2003', q1:'2010', q2:'1990', q3:'2003', q4: '2015', level: 1}
    ];
    var myobj2 = [
        {question:'In which fictional movie does Arnold have a dual role playing both himself and a fictional character?', correct:'Last Action Hero', q1:'Expendables', q2:'Last Action Hero', q3:'Terminator 3: Rise of the Machines', q4: 'Jingle All The Way', level: 2},{question:'Which of these describes the plot of the Terminator series the best?', correct:'AI tries to eliminate all of humanity', q1:'AI helps the bees pollinate to save humanity from destruction', q2:'AI tries to enslave all humanity', q3:'AI tries to enslave all humanity', q4: 'AI tries to eliminate all of humanity', level: 2},{question:'How is Arnold credited in the first movie he acted in?', correct:'Arnold Strong, “Mr. Universe”', q1:'Arnold Turbo, “Mr. Universe”', q2:'Arnold Schwarzenegger, “Mr. Universe”', q3:'Arnold Strong, “Mr. Universe”', q4: 'Archie Black, “Mr. Universe”', level: 2}
    ]
    var myobj3 = [
        {question:'In 1991 Arnold acquired for himself a very special vehicle that cost 20 000 USD. He still owns it today. Which vehicle is it?', correct:'1951 M-47 Patton tank', q1:'Lexus LS 400', q2:'1951 M-47 Patton tank', q3:'Land Rover Defender 110', q4: 'Airplane Cessna 172', level: 3},{question:'In the opening scene of the movie Commando Arnold’s character Matrix is shown carrying something on his shoulder. What is he carrying?', correct:'A whole piece of log', q1:'His daughter Jenny', q2:'Automatic rifle', q3:'A whole piece of log', q4: 'A wounded enemy soldier', level: 3},{question:'1967 Arnold won the title of Mr. Universe for the first time and became the youngest winner ever. How old was he?', correct:'20 years old', q1:'20 years old', q2:'32 years old', q3:'23 years old', q4: '25 years old', level: 3}
    ]
    var myobj4 = [
        {question:'From which of these movies is Arnold’s quote “Cocainum!” from?', correct:'Red Heat', q1:'Red Sonja', q2:'Red Heat', q3:'Eraser', q4: 'True Lies', level: 4},{question:'Arnold is not only an actor, bodybuilder and a politician but a businessman as well. He started his first business as early as 1968 with his fellow bodybuilder Franco Columbu. What kind of business were they running?', correct:'Bricklaying venture', q1:'Mail-order business selling instructional tapes for bodybuilding', q2:'Operating an independent gym in Graz, Austria', q3:'Bricklaying venture', q4: 'Real estate investment agency', level: 4},{question:'In the classic movie Predator, Arnold plays an army veteran Alan “Ducth” Schaefer, who is hired to lead a special mission into the jungle. Which military rank does Dutch hold?', correct:'Major', q1:'Major', q2:'Second Lieutenant', q3:'Lieutenant Colonel', q4: 'Sergeant First Class', level: 4}
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