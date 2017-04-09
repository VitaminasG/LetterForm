//////////////////////
// Validating the form
//////////////////////


// Validating the name field;

function name(){
    var name = document.getElementById("name");
    var check = /^[a-zA-Z]+$/;
    var msg = document.createTextNode("* name must be written using only the letters.");
    var listItem = document.createElement("li");

    if (!check.test(name.value)){
        listItem.className = "regExError";
        listItem.appendChild(msg);
        document.getElementById("error").appendChild(listItem);
    }
}

// Validating the email field;

function email(){
    var email = document.getElementById("email");
    var check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var msg = document.createTextNode("* incorrect email address!");
    var listItem = document.createElement("li");

    if (!check.test(email.value)){
        listItem.className = "regExError";
        listItem.appendChild(msg);
        document.getElementById("error").appendChild(listItem);
    }
}

// End of validation;

// Looping through all error message's and clearing;

function clear(){


    var elem = document.getElementsByClassName("mandatory");
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.display = "none";
    }

    var elem2 = document.getElementsByClassName("regExError");
    for (var j = 0; j < elem2.length; j++) {
        elem2[j].style.display = "none";
    }
}
// end of reset;

// Button click submit;

document.getElementById("submit").onclick = function () {

    clear();

    var errorMsg = document.createTextNode("* field's can not be empty.");
    var inputElements = document.getElementsByTagName("input");
    var flag = true;
    var inputId, inputType, inputNode, listItem;


// collecting all input tags with id's and types
// which have empty fields;

    for (var i = 0; i < inputElements.length; i++){
        inputId = inputElements[i].id;
        inputType = inputElements[i].type;


        if (inputType === "text" || inputType === "email"){
            inputNode = document.getElementById(inputId);
            if (inputNode.value === ""){
                listItem = document.createElement("li");
                listItem.className = "mandatory";
                listItem.appendChild(errorMsg);
                document.getElementById("error").appendChild(listItem);
            } else {
                flag = false;
            }
        }
    }

    if ( flag === false ){
        clear();
        name();
        email();
    }
};

// End of click;

// Adding additional functionality to name and email input;

var Name = document.getElementById("name");

Name.addEventListener("blur", name, true);
Name.addEventListener("focus", clear, true);

var Email = document.getElementById("email");

Email.addEventListener("blur", email, true);
Email.addEventListener("focus", clear, true);
