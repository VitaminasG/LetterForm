// Validating the form
//////////////////////


// Checking empty fields

function emptyField(){
    var errorMsg = "* field can not be empty.";
    var inputElements = document.getElementsByTagName("input");
    var flag = true;
    var inputId, inputType, inputNode, spanTag;


// collecting all input tags with id's and types

    for (var i = 0; i < inputElements.length; i++){
        inputId = inputElements[i].id;
        inputType = inputElements[i].type;


        if (inputType === "text" || inputType === "email"){
            inputNode = document.getElementById(inputId);
            if (inputNode.value === ""){
                spanTag = document.createElement("span");
                spanTag.className = "mandatory";
                spanTag.innerHTML = errorMsg;
                inputNode.parentNode.insertBefore(spanTag, inputNode.nextSibling);
            } else {
                falg = false;
            }
        }
    }

    return flag;
}

//Validating the name

function Name(){
    var name = document.getElementById("name");
    var check = /^[a-zA-Z]+$/;
    var msg = document.createTextNode("* name must be written using only the letters.");
    var spanTag = document.createElement("span");

    if (!check.test(name.value)){
        spanTag.className = "regExError";
        spanTag.appendChild(msg);
        name.parentNode.insertBefore(spanTag, name.nextSibling);
    }
}

// checking email field if it is correct;
function email(){
    var email = document.getElementById("email");
    var check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var msg = document.createTextNode("* incorrect email address!")
    var spanTag = document.createElement("span");

    if (!check.test(email.value)){
        spanTag.className = "regExError";
        spanTag.appendChild(msg);
        email.parentNode.insertBefore(spanTag, email.nextSibling);
    }
}

// Collection of all function in the script;
function init(){

// reseting erro messages;
    var elem = document.getElementsByClassName("mandatory");
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.display = "none";
    }

    var elem2 = document.getElementsByClassName("regExError");
    for (var j = 0; i < elem2.length; i++) {
        elem2[j].style.display = "none";
    }
}
// end of reset;

function Klick() {
    document.getElementsByTagName("button").onclick = function () {
        emptyField();
        if (emptyField() !== true ){
            init();
            name();
            email();
        }
    };
}

window.onload = Klick;
