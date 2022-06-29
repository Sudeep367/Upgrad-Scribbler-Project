var modal1 = document.getElementById("Modal1");
var modal2 = document.getElementById("Modal2");
var postModal = document.getElementById("postModal");
var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
//sign in modal
function signin() {
    modal1.style.display = "block";
}
//sign up modal
function signup() {
    modal2.style.display = "block";
}
//for sign up button in sign in modal
function signupmodalMember() {
    modal2.style.display = "block";
    modal1.style.display = "none";
}
//for closing
close1.onclick = function() {
    modal1.style.display = "none";
}
close2.onclick = function() {
    modal2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }

    if (event.target == postModal) {
        postModal.style.display = "none";
    }
};
//for post cards
function blogFunction() {
    var descCollection = document.getElementsByClassName("post-desc");
    for (var i = 0; i < document.getElementsByClassName("post-desc").length; i++) {
        var val = document.getElementsByClassName("post-desc")[i].innerHTML.substring(0, 250);
        descCollection[i].innerHTML = val;
    }
}
var deleteModal = document.getElementById("Modal3");
var close3 = document.getElementById("close3");
//trash icon 
function pop() {
    deleteModal.style.display = "block";
}

close3.onclick = function() {
    deleteModal.style.display = "none";
}