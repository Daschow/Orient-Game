const buttonElement = document.getElementById('btn');
const selectOne = document.getElementById('selectOne');
const selectTwo = document.getElementById('selectTwo');
const lblTwo = document.getElementById('lblTwo');
const dropfile = document.getElementById('dropfile');
const lbldropfile = document.getElementById('lbldropfile');
const radiobtndiv = document.getElementById('radiobtndiv');
const contactChoice1 = document.getElementById('contactChoice1');
const contactChoice2 = document.getElementById('contactChoice2');

lblTwo.style.display = "none"
selectTwo.style.display = "none"
DisplayFileOff()

buttonElement.addEventListener('click', function (event) {
    alert('Element clicked through function!');
    console.log("debug")
  });
  
selectOne.addEventListener('change', function (even){
    var selectOneValue = selectOne.options[selectOne.selectedIndex].value;
    if(selectOneValue == 0){
        //si pas de va
        lblTwo.style.display = "none"
        selectTwo.style.display = "none"
        radiobtndiv.style.display = "block"
    }else{
        //si de va
        lblTwo.style.display = "block"
        selectTwo.style.display = "block"
        DisplayFileOff()
        radiobtndiv.style.display = "none"
    }
});
selectTwo.addEventListener('change', function (even){
    var selectTwoValue = selectTwo.options[selectTwo.selectedIndex].value;
    if(selectTwoValue == 0){
        DisplayFileOff()
    }else{
        DisplayFile()
    }
});
contactChoice2.addEventListener('change',function (even){
    DisplayFile()
});
contactChoice1.addEventListener('change',function (even){
    DisplayFileOff()
});

function DisplayFile() {
    dropfile.style.display = "block"
    lbldropfile.style.display = "block"
}
function DisplayFileOff() {
    dropfile.style.display = "none"
    lbldropfile.style.display = "none"
}