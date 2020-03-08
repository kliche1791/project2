/* eslint-disable no-unused-vars */


// This File:
//   * Displays the Questions
//   * Submits the questions when the user hits the "submit" button.

// Are we connected?
console.log("Question Bank is Connected!");

// DOM Elements:
var questionList = document.getElementById("questionList");
var slider = document.getElementsByClassName("slider");
var quizSubmitButton = document.getElementById("quizSubmitButton");

// Global Variables
var userAnswerArr = [];
var userAnswersStr;


// QUESTION BANK 
// ====================================================================================================================
questionBank = [
  {
    question: "Sports are very important to me",
    answer1:  "DISAGREE",
    answer2:  "AGREE"
  },{
    question: "greatly prefer talking to someone in person rather than over the phone or through text messages",
    answer1:  "LIBERAL",
    answer2:  "CONSERVATIVE"
  }, {
    question: "The probability of me liking a person is heavily influenced by whether or not we share musical tastes",
    answer1:  "DISAGREE",
    answer2:  "AGREE"
  },{
    question: "I usually check my phone",
    answer1:  "NEVER",
    answer2:  "CONSTANTLY"
  },{
    question: "It is important to me that I look good, and I like the way I look",
    answer1:  "AGREE",
    answer2:  "DISAGREE"
  },{
    question: "On my day off, I prefer to",
    answer1:  "STAY AT HOME",
    answer2:  "GO OUT"
  },{
    question: "I greatly enjoy finding and trying new food",
    answer1:  "EWWWW",
    answer2:  "ABSOLUTELY!"
  },{
    question: "Technology is extemely important to our lives in the modern age",
    answer1:  "EWWWW",
    answer2:  "ABSOLUTELY!"
  },{
    question: "I believe everyone should work towards conserving and protecting the environment",
    answer1:  "NAH",
    answer2:  "ABSOLUTELY!"
  }
];



// FUNCTIONS
// ====================================================================================================================

// DISPLAY QUIZ QUESTIONS - - - - - - - - - - - - - - - - - - - - - - - - 

function displayQuestions(){
  for (var i = 0; i < questionBank.length; i++){
    
    //Creates a div:
    var questionDiv = document.createElement("div");
    questionDiv.classList.add("questionDiv");
    questionDiv.setAttribute("id","Question-${i}");

    // Add the question text:
    var questionText = document.createElement("p");
    questionText.textContent = questionBank[i].question;
    questionText.classList.add("questionText");
    questionText.setAttribute("id", `Question-Text-${i}`);
    questionDiv.appendChild(questionText);

    // Add the slider:
    var slider = document.createElement("div");
    slider.innerHTML =  `<input id="slider51" class="slider" type="range" min="1" max="5" data-rangeslider>`;
    questionDiv.appendChild(slider);

    // Add Slider Labels:
    var sliderLabelsRow = document.createElement("div");
        sliderLabelsRow.classList.add("row");
        sliderLabelsRow.classList.add("sliderLabelsRow");
    var answer1Div = document.createElement("div");
        answer1Div.classList.add("rangeLabels");
        answer1Div.classList.add("answer1");
        answer1Div.textContent = questionBank[i].answer1;
    var answer2Div = document.createElement("div");
        answer2Div.classList.add("rangeLabels");
        answer2Div.classList.add("answer2");
        answer2Div.textContent = questionBank[i].answer2;
    
    sliderLabelsRow.appendChild(answer1Div);
    sliderLabelsRow.appendChild(answer2Div);
    questionDiv.appendChild(sliderLabelsRow)
    
    // Appends created items to the question div:
    questionList.appendChild(questionDiv);
  }
}

// POST information - - - - - - - - - - - - - - - - - - - - - - - - 

function submit(event){
  event.preventDefault();

  createUserAnswerArr()
  changeAnswersArrToString()
  displayDiagram();
  API.saveSurvey(({ ProfileId: 4, userId: 4, answerArr: (userAnswersStr)}));
}

function createUserAnswerArr(){
  userScores = [];
  $(".slider").each(function() {
    var score = parseInt($(this).val())
    userScores.push(score);
  });
  userAnswerArr = userScores
  console.log(userAnswerArr);
}

function changeAnswersArrToString(){
  userAnswersStr = userAnswerArr.toString();
  console.log(userAnswersStr);
}


// RUN
// ====================================================================================================================
displayQuestions();
quizSubmitButton.onclick = submit;
