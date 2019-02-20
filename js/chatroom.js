'use strict'

var userListItem = document.getElementsByClassName("user-list-item");
var chatBoxItem = document.getElementsByClassName("chat-box");

var searchUserInput = document.getElementById("userListSearchBox");



// SUBMIT SIGNUP APP
function signOutAction(){
    location.href = "index.php";
};

// GET USER INITIALS AND ADD FIRST LETTER IN CIRCLE FOR - USER LIST
function getApplyUserListInitials(){
    for(let i = 0; i < userListItem.length; i++) {
        userListItem[i].firstElementChild.innerText = userListItem[i].innerText.substring(0,1).toUpperCase();
     }
}

getApplyUserListInitials();

// GET USER INITIALS AND ADD FIRST LETTER IN CIRCLE FOR - CHAT BOX
function getApplyUserChatInitials(){
     for(let s = 0 ; s < chatBoxItem.length; s++){
        let userDataValue = chatBoxItem[s].getAttribute("data-user");
        chatBoxItem[s].firstElementChild.innerText = userDataValue.substring(0,1).toUpperCase();
     }
}

getApplyUserChatInitials();

// USER SEARCH FROM LIST
function searchUserAction() {
    let username = document.searchUserForm["searchUserName"];
    let typedName = username.value;

    alert(typedName);

}
