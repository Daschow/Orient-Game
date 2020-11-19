const buttonElement = document.querySelector(".btn");
const selectOne = document.querySelector(".selectOne");
const selectTwo = document.querySelector(".selectTwo");
const lblTwo = document.querySelector(".lblTwo");
const dropfile = document.querySelector(".dropfile");
const lbldropfile = document.querySelector(".lbldropfile");
const radiobtndiv = document.querySelector(".radiobtndiv");
const contactChoice1 = document.querySelector(".contactChoice1");
const contactChoice2 = document.querySelector(".contactChoice2");
const dropfilediv = document.querySelector(".dropfilediv");
const successMessage = document.querySelector(".successMessage");
const composantSelector = document.querySelector(".composantSelector");
const bxtlicence = document.querySelector(".bxtlicence");

load();
function load() {
    radiobtndiv.style.display = "none";
    composantSelector.style.display = "none";
    dropfilediv.style.display = "none";
    bxtlicence.style.display = "none";
}

buttonElement.addEventListener("click", function (event) {
    successMessage.style.display = "block";
    console.log("debug");
    Alert.render();
});

selectOne.addEventListener("change", function (even) {
    var selectOneValue = selectOne.options[selectOne.selectedIndex].value;
    if (selectOneValue == 0) {
        //Externe
        dropfilediv.style.display = "none";
        composantSelector.style.display = "none";
        radiobtndiv.style.display = "block";
        contactChoice1.checked = false;
        contactChoice2.checked = false;
    } else if (selectOneValue == 3) {
        //default
        load();
    } else {
        //Etudiant
        var selectTwoValue = selectTwo.options[selectTwo.selectedIndex].value;
        composantSelector.style.display = "block";
        dropfilediv.style.display = "none";
        radiobtndiv.style.display = "none";
        bxtlicence.style.display = "none";
        if (selectTwoValue == 1) {
            dropfilediv.style.display = "block";
        }
    }
});
selectTwo.addEventListener("change", function (even) {
    var selectTwoValue = selectTwo.options[selectTwo.selectedIndex].value;
    if (selectTwoValue == 0) {
        dropfilediv.style.display = "none";
    } else {
        dropfilediv.style.display = "block";
    }
});
contactChoice2.addEventListener("change", function (even) {
    dropfilediv.style.display = "block";
    bxtlicence.style.display = "none";
});
contactChoice1.addEventListener("change", function (even) {
    dropfilediv.style.display = "none";
    bxtlicence.style.display = "block";
});

var Alert = new CustomAlert();

function CustomAlert() {
    this.render = function () {
        //Show Modal
        let popUpBox = document.getElementById("popUpBox");
        popUpBox.style.display = "block";
        //Close Modal
        document.getElementById("closeModal").innerHTML = '<button onclick="Alert.ok()">OK</button>';
    };

    this.ok = function () {
        document.getElementById("popUpBox").style.display = "none";
        document.getElementById("popUpOverlay").style.display = "none";
    };
}
