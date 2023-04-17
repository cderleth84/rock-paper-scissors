// const computerChoiceDisplay = document.getElementById("computer-choice");
// const userChoiceDisplay = document.getElementById("user-choice");
// const resultDisplay = document.getElementById("result");
// const possibleChoices = document.querySelectorAll(".rps-button");
// let userChoice;

// possibleChoices.forEach((possibleChoice) =>
//   possibleChoice.addEventListener("click", (e) => {
//     userChoice = e.target.id;
//     userChoiceDisplay.innerHTML = userChoice;
//   })
// );

// const rockChoice = document.getElementById("rock").innerText;
// const paperChoice = document.getElementById("paper").innerText;
// const scissorsChoice = document.getElementById("scissors").innerText;
// console.log(rockChoice);
// console.log(paperChoice);
// console.log(scissorsChoice);

let userChoice;

function chooseRock(rockChoice) {
  userChoice = rockChoice;
  console.log(userChoice);
  alert(`You chose ${userChoice}`);
}

function choosePaper(paperChoice) {
  userChoice = paperChoice;
  alert(`You chose ${userChoice}`);
}

function chooseScissors(scissorsChoice) {
  userChoice = scissorsChoice;
  alert(`You chose ${userChoice}`);
}
