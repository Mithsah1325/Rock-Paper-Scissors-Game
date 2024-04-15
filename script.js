//function getComputerChoice return random RPS
//function playRound(playerSelection, computerChoice) return the result


function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissor"];
    const random = Math.floor(Math.random()*3);
    return choices[random];
}

function playerChoice(){
    return prompt("Choose your selection (Rock, Paper, or Scissor)");
}

//winner
function playRound(playerSelection, computerSelection){

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if ((playerSelection === "Rock" && computerSelection === "Scissor") ||
               (playerSelection === "Paper" && computerSelection === "Rock") ||
               (playerSelection === "Scissor" && computerSelection === "Paper")) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

const playerSelection = playerChoice();
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);
console.log(result);

document.getElementById("result").innerHTML = result;