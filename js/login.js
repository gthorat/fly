'use strict'

var signUpSection = document.getElementById("signUpWrapper");
var loginSection = document.getElementById("loginWrapper");
var resetPasswordSection = document.getElementById("resetPasswordWrapper");
var headerSignUpBtn = document.getElementById("headerSignUpBtn");
var headerLoginBtn = document.getElementById("headerLoginBtn");
var materialIcons = document.getElementsByClassName("material-icons");
var headerSignOutBtn = document.getElementById("userLogged");

// HIDE SOME INFO ON PAGE TYPE
if (window.location.href.indexOf("index") > -1 || window.location.href.indexOf("") < 0) {
    //alert("in login");
    signUpSection.style.display = "none";
    resetPasswordSection.style.display = "none";
    headerLoginBtn.style.display = "none";
    headerSignOutBtn.style.display = "none";
}

if (window.location.href.indexOf("chat-room") > -1) {
    //alert("in chatroom");
    headerSignUpBtn.style.display = "none";
    headerLoginBtn.style.display = "none";
}

// GO TO SIGNUP
function goToSignUpFlow() {
    signUpSection.style.display = "block";
    loginSection.style.display = "none";
    resetPasswordSection.style.display = "none";
    headerLoginBtn.style.display = "block";
    headerSignUpBtn.style.display = "none";
};

// SUBMIT SIGNUP - ACTION GO TO LOGIN
function goToLoginFlow() {
    clearMessageErrorBox();
    signUpSection.style.display = "none";
    loginSection.style.display = "block";
    resetPasswordSection.style.display = "none";
    headerLoginBtn.style.display = "none";
    headerSignUpBtn.style.display = "block";
};

// LOGIN - ACTION GO TO CHATROOM
function goToChatRoomFlow() {
    clearMessageErrorBox();
    headerSignUpBtn.style.display = "none";
};

// RESET PASSWORD - ACTION GO TO RE LOGIN
function resetPasswordFlow() {
    clearMessageErrorBox();
    loginSection.style.display = "none";
    signUpSection.style.display = "none";
    resetPasswordSection.style.display = "block";
};

// ERROR MESSAGE BOX
var messageBox = document.getElementById("errorMessageBox");
var messageBoxText = document.getElementById("errorMessageText");

if(messageBox != undefined && messageBox !=null){
    messageBox.style.display = "none";
}

// CLEAR ERROR BOX
function clearMessageErrorBox() {
    messageBox.style.display = "none";
    messageBoxText.innerHTML ="";
}

// LOGIN ACTION
function loginFormAction() {

    var useremail = document.registrationForm["userEmail"];
    var password = document.registrationForm["Password"];

    // EMAIL VALIDATION
    if (useremail.value == "" || useremail.value.indexOf("@", 0) < 0 || useremail.value.indexOf(".", 0) < 0) {
        messageBox.style.display = "block";
        messageBoxText.innerHTML = "Please enter email";
        useremail.focus();
        useremail.classList.add("input-error");
        return false;
    } else {
        useremail.classList.remove("input-error");
    }
    
    // PASSWORD VALIDATION
    if (password.value === "") {
        messageBox.style.display = "block";
        messageBoxText.innerHTML = "Please enter password";
        password.focus();
        password.classList.add("input-error");
        return false;
    } else {
        password.classList.remove("input-error");
    }
}

// SIGNUP ACTION
function signupFormAction() {
    var email = document.signupForm["Email"];
    var createpassword = document.signupForm["CreatePassword"];
    var confirmpassword = document.signupForm["ComfirmPassword"];

    // SIGNUP
    if (email.value === "" || email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0) {
        messageBox.style.display = "block";
        messageBoxText.innerHTML = "Please enter valid email";
        email.focus();
        email.classList.add("input-error");
        return false;
    } else {
        email.classList.remove("input-error");
    }

    if (createpassword.value === "") {
        messageBox.style.display = "block";
        messageBoxText.innerHTML = "Please create password";
        createpassword.focus();
        createpassword.classList.add("input-error");
        return false;
    } else {
        createpassword.classList.remove("input-error");
    }

    if (confirmpassword.value === "") {
        messageBox.style.display = "block";
        messageBoxText.innerHTML = "Please confirm password";
        confirmpassword.focus();
        confirmpassword.classList.add("input-error");
        return false;
    } else {
        confirmpassword.classList.remove("input-error");
    }

    if (createpassword.value != confirmpassword.value) {
        messageBox.style.display = "block";
        messageBoxText.innerHTML = "Please enter matching confirm password";
        confirmpassword.focus();
        confirmpassword.classList.add("input-error");
        return false;
    } else {
        confirmpassword.classList.remove("input-error");
    }

    return true;
}

// RESET PASSWORD ACTION
function resetPasswordFormAction() {
    var resetpassword = document.resetPasswordForm["ResetPassword"];

    if (resetpassword.value === "") {
        messageBox.style.display = "block";
        messageBoxText.innerHTML = "Please reset password";
        resetpassword.focus();
        resetpassword.classList.add("input-error");
        return false;
    } else {
        resetpassword.classList.remove("input-error");
    }

    return true;
}