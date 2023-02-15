const result = document.getElementById("roll");
const rollButton = document.getElementById("button");
const dice = document.getElementById("dice");

function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  result.innerText = randomNumber;
}

rollButton.addEventListener("click", rollDice);
