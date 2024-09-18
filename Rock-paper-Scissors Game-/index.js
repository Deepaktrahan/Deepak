const choice = ["rock", "hand", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
  let computerChoice = choice[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? " YOU WIN!" : "YOU LOSE!";
        break;
      case "hand":
        result = computerChoice === "rock" ? " YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = computerChoice === "hand" ? " YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  switch(result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      break;
  }
}
