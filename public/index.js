const buttonElement = document.getElementById('btn');
const selectOne = document.getElementById('selectOne');
const selectTwo = document.getElementById('selectTwo');
const lblTwo = document.getElementById('lblTwo');
const dropfile = document.getElementById('dropfile');
const lbldropfile = document.getElementById('lbldropfile');
const radiobtndiv = document.getElementById('radiobtndiv');
const contactChoice1 = document.getElementById('contactChoice1');
const contactChoice2 = document.getElementById('contactChoice2');
const dropfilediv = document.getElementById('dropfilediv');
const successMessage = document.getElementById('successMessage');
const composantSelector = document.getElementById('composantSelector');
const bxtlicence = document.getElementById('bxtlicence');

load()
function load(){
    radiobtndiv.style.display = "none"
    composantSelector.style.display = "none"
    dropfilediv.style.display = "none"
    bxtlicence.style.display = "none"
}


buttonElement.addEventListener('click', function (event) {
    successMessage.style.display = "block"
    console.log("debug")
  });
  
selectOne.addEventListener('change', function (even){
    var selectOneValue = selectOne.options[selectOne.selectedIndex].value;
    if(selectOneValue == 0){
        //Externe
        dropfilediv.style.display = "none"
        composantSelector.style.display = "none"
        radiobtndiv.style.display = "block"
        contactChoice1.checked = false
        contactChoice2.checked = false

        
    }else if(selectOneValue == 3){
        //default
        load();
    }
    else{
        //Etudiant
        var selectTwoValue = selectTwo.options[selectTwo.selectedIndex].value;
        composantSelector.style.display = "block"
        dropfilediv.style.display = "none"
        radiobtndiv.style.display = "none"
        bxtlicence.style.display = "none"
        if(selectTwoValue == 1){
            dropfilediv.style.display = "block"
        }
    }


});
selectTwo.addEventListener('change', function (even){
    var selectTwoValue = selectTwo.options[selectTwo.selectedIndex].value;
    if(selectTwoValue == 0){
        dropfilediv.style.display = "none"
    }else{
        dropfilediv.style.display = "block"
    }
});
contactChoice2.addEventListener('change',function (even){
    dropfilediv.style.display = "block"
    bxtlicence.style.display = "none"
});
contactChoice1.addEventListener('change',function (even){
    dropfilediv.style.display = "none"
    bxtlicence.style.display = "block"
    
});
