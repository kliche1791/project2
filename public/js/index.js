/* eslint-disable no-multi-spaces */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */


// DOM Elements
  // Sections
  var pageIndex          = document.getElementById("pageIndex");
    var pageSplashPage   = document.getElementById("pageSplashPage");
    var pageSignIn       = document.getElementById("pageSignIn");
    var pageSignUpForm   = document.getElementById("pageSignUpForm");
  var pageQuiz           = document.getElementById("pageQuiz");
  var pageDiagram        = document.getElementById("pageDiagram");
  

// User Form Buttons
  var buttonToSignUpForm = document.getElementById("buttonToSignUpForm");
  var buttonToSignInForm = document.getElementById("buttonToSignInForm");
  var buttonBackHome     = document.getElementById("buttonBackHome");
  var buttonBackHome2     = document.getElementById("buttonBackHome2");
  var buttonSubmitForm = document.getElementById("buttonSubmitForm");
  var quizSubmitButton   = document.getElementById("quizSubmitButton");
// User Form Inputs  
  var $submitBtn = $("#submit");
  var $userRealName = $("#user-real-name");
  var $userName = $("#user-name");
  var $userAge = $("#user-age");
  var $userGender = $("#user-gender");
  var $userEmail = $("#user-email");
  var $userPicture = $("#user-picture");
// Add Connection
  var addConnectionClosed = document.getElementById("addConnectionClosed");
  var addConnectionOpen   = document.getElementById("addConnectionOpen");
  var buttonOpenAddConnection = document.getElementById("buttonOpenAddConnection")


// User ID Retrieved After Login/Profile Submit
  var userId;


// DISPLAY THE CORRECT DIVS:
// ==============================================================
function displaySectionsOnPageLoad(){
pageSplashPage.style.display = "block";
pageSignIn.style.display = "none";
pageSignUpForm.style.display = "none";
pageQuiz.style.display = "none";
pageDiagram.style.display = "none";
}

// Goes to Sign Up Form:
buttonToSignUpForm.onclick = function(){
pageSplashPage.style.display = "none";
pageSignIn.style.display = "none";
pageSignUpForm.style.display = "block";
};

// Sign In:
buttonToSignInForm.onclick = function(){
pageSignIn.style.display = "block";
pageSplashPage.style.display = "none";
pageSignUpForm.style.display = "none";
};

buttonBackHome.onclick = displaySectionsOnPageLoad;
buttonBackHome2.onclick = displaySectionsOnPageLoad;

buttonSubmitForm.onclick = displayQuiz;
quizSubmitButton.onclick = displayDiagram;


function displayQuiz(){
  pageIndex.style.display = "none";
  pageQuiz.style.display = "block";
  pageDiagram.style.display = "none";
  console.log($userName);
  handleUserSubmit();
}

function displayDiagram(){
  pageIndex.style.display = "none";
  pageQuiz.style.display = "none";
  pageDiagram.style.display = "block";
  addConnectionOpen.style.display = "none";
  getUserId();
}

buttonOpenAddConnection.onclick = openAddDiv;
function openAddDiv(){
  addConnectionOpen.style.display = "block";
  buttonOpenAddConnection.style.display = "none";
}


// The API object contains methods for each kind of request we'll make
var API = {
saveUser: function(data) {
  return $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "api/users",
    data: JSON.stringify(data)
  });
},
saveSurvey: function(data) {
  return $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "api/surveys",
    data: JSON.stringify(data)
  });
},
getUserByUserName: function(req, res) {
  return $.ajax({
    url: "api/users/:" + $userName.val().trim(),
    type: "GET"
  });
}
};

// Debug this in a bit...
// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleUserSubmit = function() {
// event.preventDefault();

$userRealName = $("#user-real-name").val().trim();
$userName = $("#user-name").val().trim();
$userAge = $("#user-age").val().trim();
$userGender = $("#user-gender").val().trim();
$userEmail = $("#user-email").val().trim();
$userPicture = $("#user-picture").val().trim();


  var user = {
    userName: $userName,
    name: $userRealName,
    age: $userAge,
    gender: $userGender,
    email: $userEmail,
    picture: $userPicture
  };

  if (!(user.name && user.age && user.gender && user.email && user.picture)) {
    alert("You must complete the form!");
    return;
  }

  API.saveUser(user);
};

var getUserId = function() {
  $.get(("/api/users/1/" + $userName), function(data) {
    // console.log($userName.val().trim());
    console.log(data);
    $userId = data[0].id;
    console.log($userId);
  });
};
// Add event listeners to the submit and delete buttons
// buttonSubmitForm.on("click", handleUserSubmit);



// RUN
// ==============================================================
displaySectionsOnPageLoad();