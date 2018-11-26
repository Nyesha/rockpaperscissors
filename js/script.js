// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
 var userChoice = ""
 var computerChoice = ""
 var winner = ""
 var randomNumber = Math.random();


// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    userChoice=$("#input").val()
    $("#userChoice").text(userChoice)
    console.log(userChoice);
   
})

$("#shoot").click(function(){
    computerChoice= $("randomNumber").val()
    console.log(computerChoice)
    
if (randomNumber > .60) {
    computerChoice = "Rock"
} else if (randomNumber < .70 || .60) {
    computerChoice = "Paper" 
} else {
    computerChoice = "Scissors"
} 

$("#computerChoice").html(computerChoice)
    
})