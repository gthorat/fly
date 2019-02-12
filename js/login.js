'use strict'

var signUpSection = document.getElementById("signUpWrapper");
var loginSection = document.getElementById("loginWrapper");
var resetPasswordSection = document.getElementById("resetPasswordWrapper");
var headerSignUpBtn = document.getElementById("headerSignUpBtn");
var headerLoginBtn = document.getElementById("headerLoginBtn");
var materialIcons = document.getElementsByClassName("material-icons");
var headerSignOutBtn = document.getElementById("userLogged");


// HIDE SOME INFO ON PAGE TYPE
if(window.location.href.indexOf("index") > -1) {
    //alert("in login");
    signUpSection.style.display = "none";
    resetPasswordSection.style.display = "none";
    headerLoginBtn.style.display = "none";
    headerSignOutBtn.style.display = "none";
}

if(window.location.href.indexOf("chat-room") > -1) {
    //alert("in chatroom");
    headerSignUpBtn.style.display = "none";     
    headerLoginBtn.style.display = "none";   
}


// GO TO SIGNUP
function goToSignUp() {
    signUpSection.style.display = "block";
    loginSection.style.display = "none";
    resetPasswordSection.style.display = "none";
    headerLoginBtn.style.display = "block";
    headerSignUpBtn.style.display = "none";
};

// SUBMIT SIGNUP - ACTION GO TO LOGIN
function signUpAction() {
    signUpSection.style.display = "none";
    loginSection.style.display = "block";
    resetPasswordSection.style.display = "none";
    headerLoginBtn.style.display = "none";
    headerSignUpBtn.style.display = "block";
};

// LOGIN - ACTION GO TO CHATROOM
function loginAction() {
    loginSection.style.display = "none";
    location.href = "chat-room.php";
    headerSignUpBtn.style.display = "none";
};

// RESET PASSWORD - ACTION GO TO RE LOGIN
function resetPasswordAction() {
    loginSection.style.display = "none";
    resetPasswordSection.style.display = "block";
};



