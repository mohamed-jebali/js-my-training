function checkOddEven (number){
    if(isNaN(number) || number === ""){
       document.querySelector(".prova").textContent = "Insert a number";
    }
    else if(number % 2 !== 0){
       document.querySelector(".prova").textContent = "is Odd";
    }
    else{
       document.querySelector(".prova").textContent = "is Even";
    }
 }
 
 
 
 
 
 let submitButton = document.querySelector("#sub");
 let inputUser = document.querySelector("input");
 
 submitButton.addEventListener("click",function(){
 
    let casualNumber = inputUser.value;
    checkOddEven(casualNumber);
    inputUser.value == "";
 });