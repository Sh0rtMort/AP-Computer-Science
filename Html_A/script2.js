function goBack() {
    window.location.href = "index.html";
}


window.onload = function() {
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");
    var email2 = document.getElementById("email2");
    var password2 = document.getElementById("password2");
    var emailList = document.getElementById("emailList");
    var emailListItem = document.createElement("li");

    // var encryptedEmail = CryptoJS.AES.encrypt(emailArray);
    // var encryptedPassword = CryptoJS.A.encrypt(passwordArray);

    // email2.innerHTML = "ur Email: " + encryptedEmail;
    // password2.innerHTML = "ur Password: " + encryptedPassword;

    var emailArray = localStorage.getItem("emailArray");

    //add every email in the array to emailList
    if (emailArray != null) {
        emailArray = JSON.parse(emailArray);
        for (var i = 0; i < emailArray.length; i++) {
            var emailListItem = document.createElement("li");
            emailListItem.innerHTML = emailArray[i];
            emailList.appendChild(emailListItem);
        }
    }

    var emailList = document.getElementById("emailList");
    var emailListItem = document.createElement("li");
    // emailListItem.innerHTML = email;
    // emailList.appendChild(emailListItem);

}


function revealTxt() {
    var txt = document.getElementById("erase-dataTxt");
    var conf = document.getElementById("confirm-erase");

    txt.style.display = "block";
    conf.style.display = "block";
}

function eraseData() {
    var txt = document.getElementById("erase-dataTxt");
    var password = "6887";
    var input = txt.value;

    if (input == password) {
        alert("Data Erased");
        localStorage.clear();
        window.location.href = "index2.html";
    } else {
        alert("Incorrect Password");
    }
}



//encript the email and password
// function encrypt() {
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var encryptedEmail = CryptoJS.AES.encrypt(email);
//     var encryptedPassword = CryptoJS.A.encrypt(password);

//     localStorage.setItem("email", encryptedEmail);
//     localStorage.setItem("password", encryptedPassword);
// }
