


let clearAllOnC = document.querySelector("#clearNumber");
let displayCalculator = document.querySelector(".result-container");
let numberSelected = document.querySelectorAll(".number")


function clearNumber (){
    document.querySelector(".result-container").value = "";

}

clearAllOnC.addEventListener("click",clearNumber);



let clearAllCe = document.querySelector("#clearSingle");
let currentValue = displayCalculator.value;

function clearSingleNumber (){

    let valueVoid = currentValue.slice(0, -1);
    displayCalculator.value = valueVoid;

};

clearAllCe.addEventListener("click",clearSingleNumber);


numberSelected.forEach(function(element) {
    element.addEventListener("click", function() {
        displayCalculator.value += element.value;
    });
});