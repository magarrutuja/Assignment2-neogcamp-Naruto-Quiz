var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bold.rgb(220,20,60)("This quiz is for all 'NARUTO FANS'. Welcome to the Quiz!"));

var userName= readlineSync.question(chalk.bold.rgb(186,85,211)('May I know Your Name?'));

var userName= readlineSync.question
 (chalk.bold.rgb(139,0,0)("Favourite Character from Naruto?"));
 	
 console.log(chalk.bold.rgb(102,205,170).bgBlackBright("Points Given for the same:"))

console.log(chalk.rgb(248,248,255).bgBlack(" +5 if your answer is correct"))

console.log(chalk.rgb(248,248,255).bgBlack(" -2 for the wrong answer"))

console.log(chalk.bold.greenBright.bgBlack('Hey hope you enjoy the Quiz!')); 

var score = 0;

 
var questions = [
  {
    question: "What is Naruto's last name?",
    a: "Uzumaki",
    b: "Shippuden",
    c: "Minato",
    d: "None of the above",
    answer: "a"
  },
  {
    question:"What is the village where Naruto lives called?",
    a: "Sunagakure",
    b: "Kyuubigakure",
    c: "Uzamagakure",
    d: "Konohagakure",
    answer: "d"
 },
 {
   question:"Which of these people has been Hokage the most?",
    a: "Hashirama Senju",
    b: "Kakashi Hatake",
    c: "Tsunade",
    d: "Hiruzen Sarutobi",
    answer: "d",
 },
 {
   question:"Who has not been considered for Hogake?",
    a: "Shikamaru",
    b: "Sakura",
    c: "Danzo",
    d: "Jiraiya",
    answer: "b",
 },
 {
  question: "Which of these is NOT one of Naruto's specialties?",
    a: "Shadow clone jutsu",
    b: "Chidori",
    c: "Rasengan",
    d: "Sexy no jutsu",
    answer: "b",
 },
{
  question:"What is Tsunade's drug?", 
    a: "Men",
    b: "Alcohol",
    c: "Work",
    d: "Gambling",
    answer: "d",
},
{
   question:"Which trait is common in the Uzumaki clan?",
    a: "The ability to use Rasengan",
    b: "Red hair",
    c: "Blue eyes",
    d: "Spunk",
    answer: "b",

},
{
  question:"At the beginning of Naruto, what is Sasuke's goal?",
    a: "Kill his brother",
    b: "Take over the world",
    c: "Become Hokage",
    d: "Impress Sakura",
    answer: "a"
},
]

function play(question, a, b, c, d, answer, index){
  console.log(chalk.bold.rgb(176,196,222)("Q"+(index+1)+" "+question));
  console.log(chalk.rgb(238,130,238)("(a) "+a));
  console.log(chalk.rgb(238,130,238)("(b) "+b));
  console.log(chalk.rgb(238,130,238)("(c) "+c));
  console.log(chalk.rgb(238,130,238)("(d) "+d));
  
  var answerByUser = readlineSync.question(chalk.bold.rgb(119,136,153)("Choose any one: "));

  if(!(answerByUser === "a" || answerByUser === "b" || answerByUser === "c" ||answerByUser === "d")){
    score = score-2;
  }
  else if(answerByUser === answer){
    score = score+5;
    console.log(chalk.bold.rgb(119,136,153)("Right"));
  }
  else{
    score = score-2;
    console.log(chalk.bold.rgb(119,136,153)("Wrong attempt!"));
  }
  console.log("SCORE:", score);
  console.log();  
}

for(var i = 0; i < questions.length; i++){
  var current = questions[i];
  play(current.question, current.a, current.b, current.c, current.d, current.answer, i);
}

console.log();

console.log(chalk.bold.rgb(221,160,221)("Your Final score is:", score));

console.log(chalk.bold.rgb(240,128,128)("Hope you Enjoyed the quiz!"));