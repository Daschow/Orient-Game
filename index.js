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


load()
function load(){
    radiobtndiv.style.display = "none"
    lblTwo.style.display = "none"
    selectTwo.style.display = "none"
    dropfilediv.style.display = "none"
}


buttonElement.addEventListener('click', function (event) {
    successMessage.style.display = "block"
    console.log("debug")
  });
  
selectOne.addEventListener('change', function (even){
    var selectOneValue = selectOne.options[selectOne.selectedIndex].value;
    if(selectOneValue == 0){
        //si pas de va
        lblTwo.style.display = "none"
        selectTwo.style.display = "none"
        radiobtndiv.style.display = "block"
    }else if(selectOneValue == 3){
        load();
    }
    else{
        //si de va
        lblTwo.style.display = "block"
        selectTwo.style.display = "block"
        dropfilediv.style.display = "none"
        radiobtndiv.style.display = "none"
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
});
contactChoice1.addEventListener('change',function (even){
    dropfilediv.style.display = "none"
});
    
