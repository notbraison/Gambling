//deposit some money
//determine number of betting lines
//collect a bet amount
//spin slot gambling machine
//check if user won
//give money if won, take bet if lost
//play again andor user has no money

const prompt = require("prompt-sync")({sigint:true});//getting user input
//to get user input prompt();
//{sigint:true}  - for the user to exit at will


function deposit(){
    let depositAmount = prompt("Enter a Deposit Amount: ");
    depositAmount=Number(depositAmount);
    console.log(`Your Deposit is ${depositAmount}`);
    
}

deposit();
