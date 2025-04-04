function getUserInput(){
    let userChoice = prompt("Enter your choice (rock, paper, or scissors):");
    if (userChoice === null){
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return getUserInput();
    } else {
        userChoice = userChoice.toUpperCase();
    }

    if(!["ROCK", "PAPER", "SCISSORS"].includes(userChoice)){
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return getUserInput();
    }
    return userChoice;
}
function getCompInput(){
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * choices.length)];
}
function determineWinner(user, comp){
    if(user === comp){
        return "It's a tie!";
    }
    else if((user === "ROCK" && comp === "SCISSORS") ||
            (user === "PAPER" && comp === "ROCK") ||
            (user === "SCISSORS" && comp === "PAPER")){
        return "User wins!";
    }
    else{
        return "Computer wins!";
    }
}

for( let i=0; i <5; i++){
console.log("Start");
console.log(userPick = getUserInput());
console.log(compPick = getCompInput());
console.log(determineWinner(userPick, compPick));
console.log("End");
}