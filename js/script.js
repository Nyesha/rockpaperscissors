// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
 var userChoice = ""
 var computerChoice = ""
 var winner = ""
 var randomNumber =["Rock","rock","Paper","paper","Scissors","scissors"]


// DOCUMENT READY FUNCTION BELOW
var aRandomNumber = 0
$("#shoot").click(function(){
    userChoice=$("#input").val()
    $("#userChoice").text(userChoice)
   
})

$("#shoot").click(function(){
    computerChoice= $("randomNumber").val()
    $(computerChoice).text(computerChoice)
    
})