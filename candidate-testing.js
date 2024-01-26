const input = require('readline-sync');

// Assignment complete. 

// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // readline sync input pushed into an answers array, in the same order as the questions array
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log("\nTest Results")
  
  let totalCorrect = [];
  let totalWrong = []; 

  // For loop to grade test
  // conditional statement checks candidateAnswers array against correctAnswers, and pushes resulting strings into arrays, with appropriate labelling. 
  for (let i = 0; i < correctAnswers.length; i++) {
    let result;
    if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()) {
      result = "Correct!";
      totalCorrect.push(`Question ${Number(i)} ${result}`);
    } else {
      result = "Incorrect."
      totalWrong.push(`Question ${Number(i)} ${result}`);
    }
    // "live" grading output using variables from above if statement.
    console.log(`
    Question ${i + 1}: "${questions[i]}"
    Your Answer: ${candidateAnswers[i]}
    Correct Answer: ${correctAnswers[i]}
    Result: ${result}`)
  }
  
  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  // simple percentage calculation. Compares totalCorrect.length against the total possible correct answers in the test, times 100.
  grade = ((totalCorrect.length / correctAnswers.length ) * 100);

  // elaborate template literal grading console output
  let gradeAnnounce = `Final Result: ${grade}% correct.`
  console.log(`\nCalculating...\n${totalCorrect.length} correct answers out of ${correctAnswers.length}.`)
  if (grade > 70) {
    console.log(`\n------------------------------\n${gradeAnnounce}\nYou pass, candidate ${candidateName}! :)\n------------------------------\n`)
  } else {
    console.log(`\n------------------------------\n${gradeAnnounce}\nBetter luck next time, ${candidateName}:(\n------------------------------\n`)
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello,", candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};