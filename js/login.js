'use strict'

var signUpSection = document.getElementById("signUpWrapper");
var loginSection = document.getElementById("loginWrapper");
var resetPasswordSection = document.getElementById("resetPasswordWrapper");
var headerSignUpBtn = document.getElementById("headerSignUpBtn");
var headerLoginBtn = document.getElementById("headerLoginBtn");
var materialIcons = document.getElementsByClassName("material-icons");

// HIDE SOME INFO
headerSignUpBtn.style.display = "none";
loginSection.style.display = "none";
resetPasswordSection.style.display = "none";
materialIcons.style.display = "none";

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
    location.href = "chat-logged.php";
};

// RESET PASSWORD - ACTION GO TO RE LOGIN 
function resetPasswordAction() {
    loginSection.style.display = "none";
    resetPasswordSection.style.display = "block";
};

// MATERIAL ICON ON LOAD
function showMaterialIcons() {
    materialIcons.style.display = "block";
};
    window.load = showMaterialIcons();