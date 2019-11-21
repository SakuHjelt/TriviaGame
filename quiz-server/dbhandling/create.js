var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function createInputs() {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("arnold");
    var myobj1 = [
      { question: 'Which one of these is My breakthrough film?', correct: 'Conan the Barbarian', q1: 'Conan The Destroyer', q2: 'The Terminator', q3: 'Red Sonja', q4: 'Conan the Barbarian', level: 1 },
      { question: 'From which film is the catchphrase “I’ll be back” from?', correct: 'The Terminator', q1: 'The Terminator', q2: 'Twins', q3: 'Junior', q4: 'Commando', level: 1 },
      { question: 'In which year was I elected as California’s governor?', correct: '2003', q1: '2010', q2: '1990', q3: '2003', q4: '2015', level: 1 },
      { question: 'How is my surname written?', correct: 'Schwarzenegger', q1: 'Svarzenegger', q2: 'Schwarzenegger', q3: 'Shwvartzenegger', q4: 'Swartzenegger', level: 1 },
      { question: 'Who am I?', correct: 'All mentioned', q1: 'Ex-governor of California', q2: 'Actor', q3: 'All mentioned', q4: 'Former professional bodybuilder', level: 1 },
      { question: 'What was my nickname during my political career?', correct: 'The Governator', q1: 'The Governator', q2: 'The Terminator', q3: 'The Alligator', q4: 'The Governor', level: 1 },
      { question: 'What was my nickname during my acting career?', correct: 'Arnie', q1: 'Bernie', q2: 'Arnie', q3: 'Governor', q4: 'The Austrian Oak', level: 1 },
      { question: 'How many times did I win Mr. Universe competition?', correct: 'Four times', q1: 'Four times', q2: 'One time', q3: 'Two times', q4: 'Three times', level: 1 },
      { question: 'I had the lead role in one of these movies. Which one it is?', correct: 'The Terminator', q1: 'Arnold Schwarzenegger and the Philosopher`s stone', q2: 'The Terminator', q3: 'The Terminator and the Chamber of Secrets', q4: 'Arnie and the Prisoner of Azkaban', level: 1 },
      { question: 'In what country was I born?', correct: 'Austria', q1: 'Bangladesh', q2: 'Austria', q3: 'China', q4: 'Finland', level: 1 },
    ];
    var myobj2 = [
      { question: 'In which fictional movie do I have a dual role playing both myself and a fictional character?', correct: 'Last Action Hero', q1: 'Expendables', q2: 'Last Action Hero', q3: 'Terminator 3: Rise of the Machines', q4: 'Jingle All The Way', level: 2 },
      { question: 'Which of these describes the plot of the Terminator series the best?', correct: 'AI tries to eliminate all of humanity', q1: 'AI helps the bees pollinate to save humanity from destruction', q2: 'AI tries to enslave all humanity', q3: 'AI tries to enslave all humanity', q4: 'AI tries to eliminate all of humanity', level: 2 },
      { question: 'How am I credited in the first movie I acted in?', correct: 'Arnold Strong, “Mr. Universe”', q1: 'Arnold Turbo, “Mr. Universe”', q2: 'Arnold Schwarzenegger, “Mr. Universe”', q3: 'Arnold Strong, “Mr. Universe”', q4: 'Archie Black, “Mr. Universe”', level: 2 },
      { question: 'What is the first movie in which Sylvester Stallone and I both appear on screen?', correct: 'Escape Plan', q1: 'Escape Plan', q2: 'Expendables', q3: 'Expendables 2', q4: 'Rocky VI', level: 2 },
      { question: 'In what film did Jamie Lee Curtis play my wife?', correct: 'True Lies', q1: 'The Terminator', q2: 'True Lies', q3: 'The Terminator 2: Judgement Day', q4: 'Batman & Robin', level: 2 },
      { question: 'From what movie is "Don`t disturb my friend, he`s dead tired" quote?', correct: 'Commando', q1: 'The Terminator', q2: 'Commando', q3: 'Holiday', q4: 'The Lord of the Rings', level: 2 },
      { question: 'As politician, to which party do I belong?', correct: 'The Republican Party', q1: 'The Libertarian party', q2: 'The Democratic Party', q3: 'The Republican Party', q4: 'The Green Party', level: 2 },
      { question: 'What is my ex-wife`s name?', correct: 'Maria Shriver', q1: 'Elizabeth Taylor', q2: 'Maria Shriver', q3: 'Brigitte Nielsen', q4: 'Pamela Anderson', level: 2 },
      { question: 'I get pregnant in this film.', correct: 'Junior', q1: 'Twins', q2: 'Kindergarten Cop', q3: 'Junior', q4: 'Jingle All the Way', level: 2 },
      { question: 'What is my second name', correct: 'Alois', q1: 'Peter', q2: 'Jack', q3: 'Junior', q4: 'Alois', level: 2 },
    ]
    var myobj3 = [
      { question: 'In 1991 I acquired a very special vehicle that cost me 20 000 USD. I still own it today. Which vehicle is it?', correct: '1951 M-47 Patton tank', q1: 'Lexus LS 400', q2: '1951 M-47 Patton tank', q3: 'Land Rover Defender 110', q4: 'Airplane Cessna 172', level: 3 },
      { question: 'In the opening scene of the movie Commando, my character Matrix is shown carrying something on his shoulder. What is he carrying?', correct: 'A whole piece of log', q1: 'His daughter Jenny', q2: 'Automatic rifle', q3: 'A whole piece of log', q4: 'A wounded enemy soldier', level: 3 },
      { question: '1967 I won the title of Mr. Universe for the first time and became the youngest winner ever. How old was I?', correct: '20 years old', q1: '20 years old', q2: '32 years old', q3: '23 years old', q4: '25 years old', level: 3 },
      { question: 'What was the movie, where I said "Hasta la vista, baby"?', correct: 'Terminator 2: Judgement Day', q1: 'The Terminator', q2: 'Terminator 2: Judgement Day', q3: 'Terminator 3: Rise of the Machines', q4: 'Terminator Salvation', level: 3 },
      { question: 'In this movie I shoot my wife and say "consider that a divorce".', correct: 'Total Recall', q1: 'Twins', q2: 'Kindergarten Cop', q3: 'Raw Deal', q4: 'Total Recall', level: 3 },
      { question: 'What is my highest kill count in a single film?', correct: '77', q1: '23', q2: '79', q3: '53', q4: '74', level: 3 },
      { question: 'In what film do I dream of Mars?', correct: 'Total Recall', q1: 'Eraser', q2: 'The Running Man', q3: 'Conan the Destroyer', q4: 'Total Recall', level: 3 },
      { question: 'In the action film "Commando", I dropped one of the bad guys off a cliff. When I returned to my lovely partner, she asks what happened to Sully. What did I say?', correct: 'I let him go', q1: 'I let him go', q2: 'Don`t disturb my friend, he`s dead tired', q3: 'He left', q4: 'He started to sleep', level: 3 },
      { question: 'In which movie I tell a kid that I don`t have a tumor?', correct: 'Kindergarten Cop', q1: 'Kindergarten Cop', q2: 'Total Recall', q3: 'Predator', q4: 'Running Man', level: 3 },
      { question: 'What are the names of my parents?', correct: 'Gustav and Aurelia Schwarzenegger', q1: 'Andrew and Peter Schwarzenegger', q2: 'Gustav and Aurelia Schwarzenegger', q3: 'Gunilla and Pernilla Schwarzenegger', q4: 'John and Betty Schwarzenegger', level: 3 }
    ]
    var myobj4 = [
      { question: 'Fill in the missing words. "I need your ____, your ____ and your ____?', correct: 'clothes, boots, motorcycle', q1: 'boots, clothes, motorcycle', q2: 'clothes, motorcycle, boots', q3: 'boots, motorcycle, clothes', q4: 'clothes, boots, motorcycle', level: 4 },
      { question: 'From which of these movies is my quote “Cocainum!” from?', correct: 'Red Heat', q1: 'Red Sonja', q2: 'Red Heat', q3: 'Eraser', q4: 'True Lies', level: 4 },
      { question: 'In the sci-fi blockbuster, "Total Recall", I hold arms of Richtor while an elevator cuts them off, causing Richtor to plunge to his death. As he is falling what do I say?', correct: '"See you at the party, Richtor."', q1: '"I`ll be back, Richtor"', q2: '"Hasta la vista, Richtor"', q3: '"Bite me, Richtor"', q4: '"See you at the party, Richtor."', level: 4 },
      { question: 'I am not only an actor, bodybuilder and a politician but a businessman as well. I started my first business as early as 1968 with my fellow bodybuilder Franco Columbu. What kind of business were we running?', correct: 'Bricklaying venture', q1: 'Mail-order business selling instructional tapes for bodybuilding', q2: 'Operating an independent gym in Graz, Austria', q3: 'Bricklaying venture', q4: 'Real estate investment agency', level: 4 },
      { question: 'In the classic movie Predator, I play an army veteran Alan “Ducth” Schaefer, who is hired to lead a special mission into the jungle. Which military rank does Dutch hold?', correct: 'Major', q1: 'Major', q2: 'Second Lieutenant', q3: 'Lieutenant Colonel', q4: 'Sergeant First Class', level: 4 },
      { question: 'In the action film "The Running Man", I use my most famous one liner "I`ll be back" to TV`s Richard Daweson. How does the game show legend respond to the greatest line in movie history?', correct: 'Only in a rerun', q1: 'Okay', q2: 'See you in the party', q3: 'Bite me', q4: 'Only in a rerun', level: 4 },
      { question: 'From what movie is "Knock, Knock" phrase from?', correct: 'Predator', q1: 'Commando', q2: 'Predator', q3: 'Total Recall', q4: 'Red Sonja', level: 4 },
      { question: 'In what movie I had a brother I didn`t know about?', correct: 'Twins', q1: 'Junior', q2: 'Batman & Robin', q3: 'Kindergarten Cop', q4: 'Twins', level: 4 },
      { question: 'In this movie the villain is hanging on a missile. I pressed the button and said "you`re fired"', correct: 'True Lies', q1: 'Junior', q2: 'Batman & Robin', q3: 'End of Days', q4: 'True Lies', level: 4 },
      { question: 'What was my father`s profession?', correct: 'He was the local chief of police', q1: 'He was a senior physician at local hospital', q2: 'He was a nurse', q3: 'He was the local chief of police', q4: 'He was a major in army', level: 4 }
    ]
    dbo.collection("levelOne").insertMany(myobj1, function (err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
    });
    dbo.collection("levelTwo").insertMany(myobj2, function (err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
    });
    dbo.collection("levelThree").insertMany(myobj3, function (err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
    });
    dbo.collection("levelFour").insertMany(myobj4, function (err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
    });
    dbo.createCollection("hallOfFame", function (err, res) {
      if (err) throw err;
      console.log("Also added hallOfFame");
      db.close();
    });
  });
}

module.exports = { createInputs };