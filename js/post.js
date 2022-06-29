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

function Function() {
    //we used hidden here so that save wont visible until i press edit
    document.getElementById("save").hidden = true;
}
var paraText = document.getElementById("paraText");
var Title = document.getElementById("Title");
//editing content code
function editContent() {
    paraText.setAttribute("contenteditable", "true");
    paraText.style.border = "1px solid violet";
    paraText.focus();
    Title.setAttribute("contenteditable", "true");
    Title.style.border = "1px solid pink";
    document.getElementById("edit").hidden = true;
    document.getElementById("save").hidden = false;
}
//saveing content code
function saveContent() {
    paraText.setAttribute("contenteditable", "false");
    paraText.style.border = "none";
    Title.setAttribute("contenteditable", "false");
    Title.style.border = "none";
    document.getElementById("edit").hidden = false;
    document.getElementById("save").hidden = true;
}
//for user comments 
function addComments(id) {
    var addEventName = id.value + '<br>';
    var a = document.getElementById('userComments').value.trim();
    if (a !== "") {
        var node = document.createElement('div');
        document.getElementById('addEventNames').innerHTML = '<p>' + addEventName + '</p>' +
            document.getElementById('addEventNames').innerHTML;
        a.value = a.defaultValue;
    }
    document.getElementById('userComments').value = "";
}
var numberOfClicks = 0;
// for like button and its modification to liked
function postLiked() {
    document.getElementById("likeBlog").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    numberOfClicks += 1;
    if (numberOfClicks != 0) {
        if (numberOfClicks == 1) {
            document.getElementById('commentCount').innerHTML = numberOfClicks + " person likes this!";
        } else {
            document.getElementById('commentCount').innerHTML = numberOfClicks + " people have liked this!";
        }
    }
}