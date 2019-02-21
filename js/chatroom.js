'use strict'

var userListItem = document.getElementsByClassName("user-list-item");
var chatBoxItem = document.getElementsByClassName("chat-box");
var userItem = document.getElementsByClassName("user-item");
var searchUserInput = document.getElementById("userListSearchBox");


// SUBMIT SIGNUP APP
function signOutAction(){
    location.href = "index.php";
};

// GET USER INITIALS AND ADD FIRST LETTER IN CIRCLE FOR - USER LIST
function getApplyUserListInitials(){
    for(let i = 0; i < userListItem.length; i++) {
        userListItem[i].firstElementChild.innerText = userListItem[i].innerText.substring(0,2).toUpperCase();
     }
}

getApplyUserListInitials();

// GET USER INITIALS AND ADD FIRST LETTER IN CIRCLE FOR - CHAT BOX
function getApplyUserChatInitials(){
     for(let s = 0; s < chatBoxItem.length; s++){
        let userDataValue = chatBoxItem[s].getAttribute("data-user");
        chatBoxItem[s].firstElementChild.innerText = userDataValue.substring(0,2).toUpperCase();
     }
}

getApplyUserChatInitials();

// HIDE USER LIST INITIALLY
function hideUserList() {
    for(let u = 0; u < userItem.length; u++){
        userItem[u].style.display = "none";
    }
}

hideUserList();

// USER SEARCH FROM LIST
function searchUserAction() {
    let userInitials = document.searchUserForm["searchUserName"];
    var typedText = userInitials.value;

    for(let i = 0; i < userItem.length; i++){
        let txtValue = userItem[i].innerText;

        if(txtValue.toLowerCase().indexOf(typedText) > 0 || txtValue.toUpperCase().indexOf(typedText) > 0) {
            userItem[i].style.display = "block";
        } else {
            userItem[i].style.display = "none";
        }
    }
}
