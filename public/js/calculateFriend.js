$(document).ready(function(){
// SEED FRIENDS:
//====================================================================================================
// replace this with a data list that pulls from the "connections"
var connectionAnswersSeed = [
  {
    userID: 1000000001,
    userAnswers: [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
  },{
    userID: 1000000002,
    userAnswers: [5,5,3,5,3,5,3,5,3,3,5,3,3,5,3]
  } , {
    userID: 1000000003,
    userAnswers: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  } , {
    userID: 1000000004,
    userAnswers: [5,5,5,5,4,5,4,5,4,3,5,3,5,3,5]
  }
];

var connectionNamesSEED = [
  {
    userID: 0000000001,
    name: "Carlos"
  },{
    userID: 0000000002,
    name: "Taylor"
  } , {
    userID: 0000000003,
    name: "Leah"
  } , {
    userID: 0000000004,
    name: "Connor"
  }, {
    userID: 0000000004,
    name: "Joe"
  }
];





// Seed User Info
// ---------------------------------
// We'll want to actually pull this from the database.
var SEEDNAME = "kyle";
var SEEDANSWERS = "1,1,1,1,1,1,1,1,1,1,1,1,1,1,1";
var SEEDUSERNAME = "gnefkow";

// ======================= END SEEDS, REAL CODE BELOW =============================================//
// ======================= END SEEDS, REAL CODE BELOW =============================================//
// ======================= END SEEDS, REAL CODE BELOW =============================================//
// ======================= END SEEDS, REAL CODE BELOW =============================================//




// DOM ELEMENTS 
//====================================================================================================
// Global Variables
//Get the user ID's:
var userAnswersStr = SEEDANSWERS;                     // BACKEND:Replace this with the actual string.;
var name = SEEDNAME;                                  // BACKEND:
var userName = SEEDUSERNAME;                          // BACKEND
var connectionNames = connectionNamesSEED;            // BACKEND: Replace this a connection to the backend;
//   ...then get the connection's answers:
var connectionAnswersObject = connectionAnswersSeed;  // BACKEND: replace this with the correct thing.


var userID;
var userAnswersArr;
var connectionAnswersArr;
var differencesArr = [];
var multiplier;






// Populate "friends" with data from the API
//====================================================================================================  
// PLUG IN:

// $.get("/api/friends", function(data){
  //   console.log(data);
  //   friends = data;
  // });



// Master Functions: CALCULATE FRIEND
//====================================================================================================

function pageLoad(){
  getUserConnections();
}

function createFriendsVisualization(){
  parseUserAnswersToArr();
  getConnectionsArr();
  calculateDistanceMultiplier();
  findDifferences();
  visualizeEasy();
}

function displayNoFriendsScreen(){
  console.log(`We need to add the "no friends" screen here!`);
}


// SUB-FUNCTIONS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function calculateDistanceMultiplier(){
  var numOfQuestions = userAnswersArr.length;
  var maxScore = numOfQuestions * 5;
  multiplier = 100/maxScore;
}

function getUserConnections(){
  var userHasFriends = true;   // This needs to vary based on then number of things returned from the database.

  if (userHasFriends === true) {
    createFriendsVisualization(); 
  } else {
    displayNoFriendsScreen();
  }
}

function parseUserAnswersToArr(){
  userAnswersArr = userAnswersStr.split(",");
}

function getConnectionsArr(){
    // Code to pull the user's connections.
    connectionAnswersArr = connectionAnswersObject;
}

function findDifferences(){
  for (var i = 0; i < connectionAnswersArr.length; i++){  // Runs for each friend
    
    // GET DIFFERNECES ========================//
    // Variables: Outer Loop:
      var connectionID = connectionAnswersObject[i].userID;
      var connectionAnswer = connectionAnswersArr[i].userAnswers;
      var newDiff = [];

    // Nested Loop: // Runs for each index
      for (var j = 0; j < connectionAnswer.length; j++){
      newDiff.push(Math.abs(connectionAnswer[j] - userAnswersArr[j]))
      }

    // GET DIFFERENCE:
      newDiff = newDiff.reduce((a, b) => a + b, 0)
    // ================ 
    
    //  GET DIFF PERCENTAGE:
      var diffPercent = (newDiff * multiplier)/100;

    // GET NAME:
      var connectionName = connectionNames[i].name;

    // ADD TO differencesArr
      var newDifferentConnection = new Connection(connectionID, connectionName, newDiff, diffPercent);
      differencesArr.push(newDifferentConnection);
  }
  console.log(differencesArr)
}

function Connection(userID, name, difference, diffPercent) {
  // Can I add name to this?
  this.userID = userID;
  this.difference = difference;
  this.name = name;
  this.diffPercent = diffPercent;
}


// Easy Visualization
//====================================================================================================

var visualsDiv = document.getElementById("visualsDiv");


function visualizeEasy(){
  // renderDistances();
  for (var i = 0; i< differencesArr.length; i++){
    var name = differencesArr[i].name;
    var diffPercent = differencesArr[i].diffPercent;
    
    // Create a Div:
    var readoutDiv = document.createElement("div");
    readoutDiv.classList.add("row");
    readoutDiv.classList.add("readoutDiv");

    // Convert Decimal to Percent:
    var wholePercent = Math.round(diffPercent * 100);

    // Add Text:
    var text = document.createElement("p");
    text.textContent = `${wholePercent}% different from ${name}`;
    readoutDiv.appendChild(text);

    visualsDiv.appendChild(readoutDiv);
  }
}


// Display Username:
//====================================================================================================
var displayUsername = document.getElementById("displayUsername");
displayUsername.textContent = `Hey, ${name}, your friends can find you with your username, ${userName}`;





  // RUN
  //====================================================================================================
  pageLoad();

});